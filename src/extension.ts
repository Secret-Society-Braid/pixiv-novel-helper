import * as vscode from 'vscode';
import Location from './Location';

export function activate(context: vscode.ExtensionContext) {

	console.log('Activated "pixiv-novel-helper"!');

	const location: Location = new Location();

	// open pixiv home page
	const openPixivCommand = vscode.commands.registerCommand('pixiv-novel-helper.openPixiv', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct({ relativePath: undefined })));
	});

	// open dashboard related pages
	const openPixivDashBoardHome = vscode.commands.registerCommand('pixiv-novel-helper.openPixivDashBoardHome', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'dashboard' ] } )));
	});

	const openPixivDashBoardAllHome = vscode.commands.registerCommand('pixiv-novel-helper.openPixivDashBoardAllHome', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'dashboard', 'works' ] } )));
	});

	const openPixivDashBoardAllSeries = vscode.commands.registerCommand('pixiv-novel-helper.openPixivDashBoardAllSeries', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'dashboard', 'works' ,'series' ] } )));
	});

	const openPixivDashBoardAllDrafts = vscode.commands.registerCommand('pixiv-novel-helper.openPixivDashBoardAllDrafts', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'dashboard', 'works', 'drafts' ] } )));
	});

	const openPixivDashBoardIllustrationsHome = vscode.commands.registerCommand('pixiv-novel-helper.openPixivDashBoardIllustrationsHome', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'dashboard', 'works', 'illustrations' ] } )));
	});

	const openPixivDashBoardNovelsHome = vscode.commands.registerCommand('pixiv-novel-helper.openPixivDashBoardNovelsHome', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'dashboard', 'works', 'novels' ] } )));
	});

	const openPixivDashBoardNovelsSeries = vscode.commands.registerCommand('pixiv-novel-helper.openPixivDashBoardNovelsSeries', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'dashboard', 'works', 'novels', 'series' ] } )));
	});

	const openPixivDashBoardNovelsDrafts = vscode.commands.registerCommand('pixiv-novel-helper.openPixivDashBoardNovelsDrafts', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'dashboard', 'works', 'novels', 'drafts' ] } )));
	});

	// open request related pages
	const openPixivRequestHome = vscode.commands.registerCommand('pixiv-novel-helper.openPixivRequestHome', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'manage', 'requests' ] } )));
	});

	// open pixiv upload page

	const openPixivUploadPage = vscode.commands.registerCommand('pixiv-novel-helper.openPixivUploadPage', () => {
		vscode.env.openExternal(vscode.Uri.parse(location.construct( { relativePath: [ 'novel', 'upload.php' ] } )));
	});

	// register to the subscriptions
	context.subscriptions.push(
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
		openPixivUploadPage
	);
}

export function deactivate() {}
