import * as vscode from "vscode";

const treeData =
  [
    {
      label: "root1",
      collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
      children: [
        {
          label: "root1/child1",
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          command:
            {
              command: "oreore.helloWorld",
              title: "say hello",
              arguments: []
            }
        },
        {
          label: "root1/child2",
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          command:
            {
              command: "oreore.helloWorld",
              title: "say hello",
              arguments: []
            }
        }
      ]
    },
    {
      label: "root2",
      collapsibleState: vscode.TreeItemCollapsibleState.Collapsed,
      children: [
        {
          label: "root2/child1",
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          command:
            {
              command: "oreore.helloWorld",
              title: "say hello",
              arguments: []
            }
        },
        {
          label: "root2/child2",
          collapsibleState: vscode.TreeItemCollapsibleState.None,
          command:
            {
              command: "oreore.helloWorld",
              title: "say hello",
              arguments: []
            }
        }
      ]
    }
  ];

export class NovelTreeItemProvider {
  getTreeItem(element: any)  {
    return element;
  }

  getChildren(element: any) {
    if (!element) {
      return treeData;
    } else {
      return element.children;
    }
  }
}
