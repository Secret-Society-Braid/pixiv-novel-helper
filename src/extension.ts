import * as vscode from "vscode";
import {
  CharacterCount,
  CharacterCounterController,
} from "./features/characterCount";
import {
  openPixivCommand,
  openPixivDashBoardAllDrafts,
  openPixivDashBoardAllHome,
  openPixivDashBoardAllSeries,
  openPixivDashBoardHome,
  openPixivDashBoardIllustrationsHome,
  openPixivDashBoardNovelsDrafts,
  openPixivDashBoardNovelsHome,
  openPixivDashBoardNovelsSeries,
  openPixivRequestHome,
  openPixivUploadPage,
} from "./features/commands";

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  console.log('Activated "pixiv-novel-helper"!');

  // character count initialization
  const characterCount: CharacterCount = new CharacterCount();
  const controller: CharacterCounterController = new CharacterCounterController(characterCount);

  // register to the subscriptions
  context.subscriptions.push(
    // commands
    openPixivCommand,
    openPixivDashBoardHome,
    openPixivDashBoardAllHome,
    openPixivDashBoardAllSeries,
    openPixivDashBoardAllDrafts,
    openPixivDashBoardIllustrationsHome,
    openPixivDashBoardNovelsHome,
    openPixivDashBoardNovelsSeries,
    openPixivDashBoardNovelsDrafts,
    openPixivRequestHome,
    openPixivUploadPage,
    // character count
    controller,
    characterCount
  );
}

export async function deactivate(): Promise<void> {}
