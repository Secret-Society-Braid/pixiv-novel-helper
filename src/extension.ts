import { ExtensionContext, window } from "vscode";
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
import { NovelTreeItemProvider } from "./features/trees";

export function activate(context: ExtensionContext) {
  console.log('Activated "pixiv-novel-helper"!');

  // character count initialization
  const characterCount = new CharacterCount();
  const controller = new CharacterCounterController(characterCount);

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

  // Register Tree view
  window.createTreeView('novel-view', {
    treeDataProvider: new NovelTreeItemProvider(),
  });
}

export function deactivate() {}
