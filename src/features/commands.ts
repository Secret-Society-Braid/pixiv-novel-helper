import { commands, Uri, env } from "vscode";
import Location from "./Location";

const location: Location = new Location();

// open pixiv home page
export const openPixivCommand = commands.registerCommand(
  "pixiv-novel-helper.openPixiv",
  () => {
    env.openExternal(
      Uri.parse(location.construct({ relativePath: undefined }))
    );
  }
);

// open dashboard related pages
export const openPixivDashBoardHome = commands.registerCommand(
  "pixiv-novel-helper.openPixivDashBoardHome",
  () => {
    env.openExternal(
      Uri.parse(location.construct({ relativePath: ["dashboard"] }))
    );
  }
);

export const openPixivDashBoardAllHome = commands.registerCommand(
  "pixiv-novel-helper.openPixivDashBoardAllHome",
  () => {
    env.openExternal(
      Uri.parse(location.construct({ relativePath: ["dashboard", "works"] }))
    );
  }
);

export const openPixivDashBoardAllSeries = commands.registerCommand(
  "pixiv-novel-helper.openPixivDashBoardAllSeries",
  () => {
    env.openExternal(
      Uri.parse(
        location.construct({ relativePath: ["dashboard", "works", "series"] })
      )
    );
  }
);

export const openPixivDashBoardAllDrafts = commands.registerCommand(
  "pixiv-novel-helper.openPixivDashBoardAllDrafts",
  () => {
    env.openExternal(
      Uri.parse(
        location.construct({ relativePath: ["dashboard", "works", "drafts"] })
      )
    );
  }
);

export const openPixivDashBoardIllustrationsHome = commands.registerCommand(
  "pixiv-novel-helper.openPixivDashBoardIllustrationsHome",
  () => {
    env.openExternal(
      Uri.parse(
        location.construct({
          relativePath: ["dashboard", "works", "illustrations"],
        })
      )
    );
  }
);

export const openPixivDashBoardNovelsHome = commands.registerCommand(
  "pixiv-novel-helper.openPixivDashBoardNovelsHome",
  () => {
    env.openExternal(
      Uri.parse(
        location.construct({ relativePath: ["dashboard", "works", "novels"] })
      )
    );
  }
);

export const openPixivDashBoardNovelsSeries = commands.registerCommand(
  "pixiv-novel-helper.openPixivDashBoardNovelsSeries",
  () => {
    env.openExternal(
      Uri.parse(
        location.construct({
          relativePath: ["dashboard", "works", "novels", "series"],
        })
      )
    );
  }
);

export const openPixivDashBoardNovelsDrafts = commands.registerCommand(
  "pixiv-novel-helper.openPixivDashBoardNovelsDrafts",
  () => {
    env.openExternal(
      Uri.parse(
        location.construct({
          relativePath: ["dashboard", "works", "novels", "drafts"],
        })
      )
    );
  }
);

// open request related pages
export const openPixivRequestHome = commands.registerCommand(
  "pixiv-novel-helper.openPixivRequestHome",
  () => {
    env.openExternal(
      Uri.parse(location.construct({ relativePath: ["manage", "requests"] }))
    );
  }
);

// open pixiv upload page

export const openPixivUploadPage = commands.registerCommand(
  "pixiv-novel-helper.openPixivUploadPage",
  () => {
    env.openExternal(
      Uri.parse(location.construct({ relativePath: ["novel", "upload.php"] }))
    );
  }
);
