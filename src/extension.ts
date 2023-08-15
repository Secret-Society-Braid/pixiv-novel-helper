import * as vscode from 'vscode';
import {CharacterCount, CharacterCounterController} from "./features/characterCount";
import { openPixivCommand, openPixivDashBoardAllDrafts, openPixivDashBoardAllHome, openPixivDashBoardAllSeries, openPixivDashBoardHome, openPixivDashBoardIllustrationsHome, openPixivDashBoardNovelsDrafts, openPixivDashBoardNovelsHome, openPixivDashBoardNovelsSeries, openPixivRequestHome, openPixivUploadPage } from './features/commands';

export function activate(context: vscode.ExtensionContext) {

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
}

export function deactivate() {}
