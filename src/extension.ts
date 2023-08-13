import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "pixiv-novel-helper" is now active!');

	const disposable = vscode.commands.registerCommand('pixiv-novel-helper.helloWorld', () => {
		vscode.window.showInformationMessage('Hello VScode World! from pixiv-novel-helper!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
