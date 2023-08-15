import { TreeDataProvider, TreeItem, TreeItemCollapsibleState } from "vscode";

export class NovelTreeItemProvider implements TreeDataProvider<FileStructureTreeItem> {
  getTreeItem(element: any)  {
    return element;
  }

  getChildren(element?: any) {
    if (!element) {
      return treeData;
    } else {
      return element.children;
    }
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
