import { TreeDataProvider, TreeItem, TreeItemCollapsibleState } from "vscode";
import * as fs from "fs";

export class NovelTreeItemProvider implements TreeDataProvider<FileStructureTreeItem> {
  getTreeItem(element: FileStructureTreeItem): TreeItem  {
    return element;
  }

  getChildren(element?: any): Thenable<Array<FileStructureTreeItem>> {
    if (!element) {
      return Promise.resolve(treeData);
    } else {
      return element.children;
    }
  }

  private _getStructureElement(openedFileName: string): Array<FileStructureTreeItem> {
    const lines = fs.readFileSync(openedFileName, "utf-8").split("\n");
    const result: Array<FileStructureTreeItem> = [];
    
    return result;
  }
}

class FileStructureTreeItem extends TreeItem {
  constructor(
    public readonly label: string,
    public readonly collapsibleState: TreeItemCollapsibleState
  ) {
    super(label, collapsibleState);
    this.tooltip = this.label;
    this.description = this.label;
  }
}

const treeData = [
  {
    label: "トップ",
    collapsibleState: TreeItemCollapsibleState.Expanded,
    children: [
      {
        label: "1ページ",
        collapsibleState: TreeItemCollapsibleState.None,
      },
    ],
  },
];
