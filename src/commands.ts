export type CommandType = {
  name: string;
  url: string;
  searchurl?: string;
};

export type CommandNames =
  | "fb"
  | "m"
  | "mw"
  | "wa"
  | "waw"
  | "gm"
  | "sis"
  | "col"
  | "yt"
  | "tv"
  | "gh"
  | "r"
  | "l"
  | "me"
  | "ig"
  | "tw"
  | "tr"
  | "todo"
  | "c"
  | "wf"
  | "$"
  | "cal"
  | "uvacovid"
  | "hs"
  | "p"
  | "n"
  | "h"
  | "pv"
  | "gd"
  | "wiki"
  | "g"
  | "DEFAULT"
  | "lol"
  | "map"
  | "yarn"
  | "nusmods"
  | "npm"
  | "bing"
  | "chat";

export type CommandDataTableType = {
  name: string;
  url: string;
  command: CommandNames;
};

export type ColumnDataTableType = {
  data: string;
  title: string;
};

const lol: CommandType = {
  name: "BunnyLOL",
  url: "https://hanlindev.github.io/bunnylol",
};

const map: CommandType = {
  name: "Map (Google)",
  url: "https://www.google.com/maps/",
  searchurl: "https://www.google.com/maps/?q=",
};

const yarn: CommandType = {
  name: "Yarn Package Manager",
  url: "https://yarnpkg.com",
  searchurl: "https://yarnpkg.com/?q=",
};

const npm: CommandType = {
  name: "NPM",
  url: "https://www.npmjs.com",
  searchurl: "https://www.npmjs.com/search?q=",
};

const bing: CommandType = {
  name: "Bing",
  url: "https://cn.bing.com",
  searchurl: "https://cn.bing.com/search?q=",
};

const chat: CommandType = {
  name: "Chat GPT",
  url: "https://chatgpt.com",
  searchurl: "https://chatgpt.com/?q=",
};

export const COMMANDS: Record<CommandNames, CommandType> = {
  fb: {
    name: "Facebook",
    url: "https://facebook.com/",
    searchurl: "https://www.facebook.com/search/top/?q=",
  },
  m: {
    name: "Messenger Desktop App",
    url: "messenger://",
  },
  mw: {
    name: "Messenger Web",
    url: "https://www.messenger.com/",
  },
  wa: {
    name: "WhatsApp Desktop App",
    url: "whatsapp://",
  },
  waw: {
    name: "WhatsApp Web",
    url: "https://web.whatsapp.com/",
  },
  gm: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0",
    searchurl: "https://mail.google.com/mail/u/",
  },
  gd: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/0",
    searchurl: "https://drive.google.com/drive/u/",
  },
  sis: {
    name: "UVA SIS",
    url: "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main",
  },
  col: {
    name: "UVA Collab",
    url: "https://collab.its.virginia.edu/portal",
  },
  yt: {
    name: "YouTube",
    url: "https://youtube.com/",
    searchurl: "https://www.youtube.com/results?search_query=",
  },
  tv: {
    name: "YouTube TV",
    url: "https://tv.youtube.com/",
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/",
    searchurl: "https://www.github.com/search?q=",
  },
  r: {
    name: "Reddit",
    url: "https://reddit.com/",
    searchurl: "https://www.reddit.com/search?q=",
  },
  l: {
    name: "Linkedin",
    url: "https://linkedin.com/",
  },
  ig: {
    name: "Instagram",
    url: "https://instagram.com/",
    searchurl: "https://instagram.com/",
  },
  tw: {
    name: "Twitter",
    url: "https://twitter.com/",
    searchurl: "https://twitter.com/search?q=",
  },
  me: {
    name: "Rithik.me - Personal Website",
    url: "https://rithik.me/me",
  },
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
  tr: {
    name: "HooHacks Trello Board",
    url: "https://trello.com/b/GjKhtVPK/hoohacks",
  },
  n: {
    name: "Netflix",
    url: "https://netflix.com/",
    searchurl: "https://www.netflix.com/search?q=",
  },
  h: {
    name: "Hulu",
    url: "https://hulu.com/",
  },
  pv: {
    name: "Amazon Prime Video",
    url: "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
    searchurl: "https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k=",
  },
  p: {
    name: "Piazza",
    url: "https://piazza.com/class",
  },
  wf: {
    name: "Webflow",
    url: "https://webflow.com/design/hoohacks",
  },
  hs: {
    name: "Hubspot",
    url: "https://app.hubspot.com/",
  },
  $: {
    name: "Robinhood",
    url: "https://robinhood.com/",
    searchurl: "https://robinhood.com/stocks/",
  },
  c: {
    name: "Robinhood Crypto",
    url: "https://robinhood.com/",
    searchurl: "https://robinhood.com/crypto/",
  },
  cal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/r",
  },
  uvacovid: {
    name: "UVA COVID-19 Tracker",
    url: "https://returntogrounds.virginia.edu/covid-tracker",
  },
  wiki: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/wiki/",
  },
  todo: {
    name: "Microsoft To Do",
    url: "https://to-do.live.com",
  },
  lol,
  map,
  yarn,
  nusmods: {
    name: "NUS Mods",
    url: "https://nusmods.com/",
    searchurl: "https://nusmods.com/courses?q=",
  },
  npm,
  bing,
  chat,
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
};
