"use strict";

import {
  Disposable,
  StatusBarAlignment,
  StatusBarItem,
  TextDocument,
  TextEditor,
  window,
  workspace,
} from "vscode";

export class CharacterCount {
  private _statueBarItem!: StatusBarItem;
  private readonly _characterLimit: number = 300000;
  private _suppressLimitNotice: boolean = false;

  public async updateCharacterCount(): Promise<void> {
    if (!this._statueBarItem) {
      this._statueBarItem = window.createStatusBarItem(StatusBarAlignment.Left);
    }
    const editor: TextEditor | undefined = window.activeTextEditor;
    if (!editor) {
      this._statueBarItem.hide();
      return;
    }
    const doc: TextDocument = editor.document;

    // count for ".txt" and ".pntxt" files
    if (
      doc.languageId === "plaintext" ||
      doc.languageId === "pixiv.novel.text"
    ) {
      const characterCount: number = await this._getCharacterCount(doc);
      this._statueBarItem.text = `$(pencil) ${characterCount} 文字 / 上限まであと: ${
        this._characterLimit - characterCount
      } 文字`;
      this._noticeCharacterLimitReaching(characterCount);
      this._statueBarItem.show();
    } else {
      this._statueBarItem.hide();
      this._suppressLimitNotice = false;
    }
  }

  private async _getCharacterCount(doc: TextDocument): Promise<number> {
    const docContent: string = doc.getText();
    return docContent !== "" ? docContent.length : 0;
  }

  public async dispose(): Promise<void> {
    this._statueBarItem.dispose();
    this._suppressLimitNotice = false;
  }

  private async _noticeCharacterLimitReaching(curr: number): Promise<void> {
    if (this._characterLimit < curr) {
      window.showWarningMessage(
        "文字数制限に掛かっています。このファイルをそのままコピーして投稿することはできない可能性があります。"
      );
      return;
    }
    if (this._suppressLimitNotice) {
      return;
    }
    if (this._characterLimit - curr < 1000) {
      window
        .showInformationMessage(
          "執筆おつかれさまです。もうすぐで文字数制限に掛かりそうです。これ以上続ける場合は作品の分割をおすすめします。",
          "このまま執筆を続ける",
          "通知を止める",
        )
        .then((choice: string | undefined): void => {
          switch (choice) {
            case "このまま執筆を続ける":
              window.showInformationMessage(
                "了解しました。執筆がんばってください！(念のため、通知は送信され続けます。)"
              );
              break;
            case "通知を止める":
              this._suppressLimitNotice = true;
              window.showInformationMessage(
                "了解しました。このセッション中は通知を停止します。"
              );
              break;
          }
        });
    }
  }
}

export class CharacterCounterController {
  private _characterCounter: CharacterCount;
  private _disposable: Disposable;

  constructor(characterCounter: CharacterCount) {
    this._characterCounter = characterCounter;
    this._characterCounter.updateCharacterCount();

    const subscriptions: Disposable[] = [];
    window.onDidChangeTextEditorSelection(this._onEvent.bind(this), this, subscriptions);
    window.onDidChangeActiveTextEditor(this._onEvent.bind(this), this, subscriptions);
    workspace.onDidSaveTextDocument(this._onEvent.bind(this), this, subscriptions);

    this._disposable = Disposable.from(...subscriptions);
  }

  private async _onEvent(): Promise<void> {
    this._characterCounter.updateCharacterCount();
  }

  public async dispose(): Promise<void> {
    this._disposable.dispose();
  }
}
