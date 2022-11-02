'use strict';const COMMANDS = {
  fb: {
    name: "Facebook",
    url: "https://facebook.com/",
    searchurl: "https://www.facebook.com/search/top/?q="
  },
  m: {
    name: "Messenger Desktop App",
    url: "messenger://"
  },
  mw: {
    name: "Messenger Web",
    url: "https://www.messenger.com/"
  },
  wa: {
    name: "WhatsApp Desktop App",
    url: "whatsapp://"
  },
  waw: {
    name: "WhatsApp Web",
    url: "https://web.whatsapp.com/"
  },
  gm: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0",
    searchurl: "https://mail.google.com/mail/u/"
  },
  gd: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/0",
    searchurl: "https://drive.google.com/drive/u/"
  },
  sis: {
    name: "UVA SIS",
    url: "https://sisuva.admin.virginia.edu/psc/ihprd/UVSS/SA/s/WEBLIB_HCX_GN.H_SPRINGBOARD.FieldFormula.IScript_Main"
  },
  col: {
    name: "UVA Collab",
    url: "https://collab.its.virginia.edu/portal"
  },
  yt: {
    name: "YouTube",
    url: "https://youtube.com/",
    searchurl: "https://www.youtube.com/results?search_query="
  },
  tv: {
    name: "YouTube TV",
    url: "https://tv.youtube.com/"
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/",
    searchurl: "https://www.github.com/search?q="
  },
  r: {
    name: "Reddit",
    url: "https://reddit.com/",
    searchurl: "https://www.reddit.com/search?q="
  },
  l: {
    name: "Linkedin",
    url: "https://linkedin.com/"
  },
  ig: {
    name: "Instagram",
    url: "https://instagram.com/",
    searchurl: "https://instagram.com/"
  },
  tw: {
    name: "Twitter",
    url: "https://twitter.com/",
    searchurl: "https://twitter.com/search?q="
  },
  me: {
    name: "Rithik.me - Personal Website",
    url: "https://rithik.me/me"
  },
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q="
  },
  wp: {
    name: "Washington Post",
    url: "https://www.washingtonpost.com/regional/"
  },
  wsj: {
    name: "Wall Street Journal",
    url: "https://www.wsj.com/"
  },
  cnn: {
    name: "CNN",
    url: "https://www.cnn.com/"
  },
  tr: {
    name: "HooHacks Trello Board",
    url: "https://trello.com/b/GjKhtVPK/hoohacks"
  },
  n: {
    name: "Netflix",
    url: "https://netflix.com/",
    searchurl: "https://www.netflix.com/search?q="
  },
  h: {
    name: "Hulu",
    url: "https://hulu.com/"
  },
  pv: {
    name: "Amazon Prime Video",
    url: "https://www.amazon.com/Amazon-Video/b/?&node=2858778011&ref=dvm_MLP_ROWNA_US_1",
    searchurl: "https://www.amazon.com/s?i=instant-video&ref=nb_sb_noss_2&k="
  },
  p: {
    name: "Piazza",
    url: "https://piazza.com/class"
  },
  vs: {
    name: "VS Code",
    url: "vscode://"
  },
  wf: {
    name: "Webflow",
    url: "https://webflow.com/design/hoohacks"
  },
  hs: {
    name: "Hubspot",
    url: "https://app.hubspot.com/"
  },
  $: {
    name: "Robinhood",
    url: "https://robinhood.com/",
    searchurl: "https://robinhood.com/stocks/"
  },
  c: {
    name: "Robinhood Crypto",
    url: "https://robinhood.com/",
    searchurl: "https://robinhood.com/crypto/"
  },
  cal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/r"
  },
  uvacovid: {
    name: "UVA COVID-19 Tracker",
    url: "https://returntogrounds.virginia.edu/covid-tracker"
  },
  wiki: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/wiki/"
  },
  todo: {
    name: "Microsoft To Do",
    url: "https://to-do.live.com"
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q="
  }
};// j = join; d = discussion; c = UVA Collab; default to url; s = special
const CLASSES = {
  f1: {
    name: "CS 4501: F1/10 Autonomous Racing: Perception, Planning, and Control for Autonomous Driving",
    url: "https://linklab-uva.github.io/autonomousracing/",
    collaburl: "https://collab.its.virginia.edu/portal/site/90579f89-3cbf-4f83-a4d7-902848f7703d",
    discussionurl: "https://piazza.com/class/kko5x3rocvl3ky"
  },
  pl: {
    name: "CS 4640: Programming Languages for Web Applications",
    url: "https://www.cs.virginia.edu/~up3f/cs4640/schedule.html",
    collaburl: "https://collab.its.virginia.edu/portal/site/8fff0a03-d2d8-45c8-bda6-760bf8d7e2e4/",
    discussionurl: "https://piazza.com/class/kkestnq1z5u3kl",
    zoomurl: "https://virginia.zoom.us/j/95783077722?pwd=U2lLTkN3Y05WWGhJQ051Z3BUWmxvUT09"
  },
  cv: {
    name: "CS 4501: Introduction to Computer Vision",
    url: "https://www.vicenteordonez.com/vision/",
    collaburl: "https://collab.its.virginia.edu/portal/site/a348b7f2-473b-46d4-b348-f189fc4889e3",
    zoomurl: "https://virginia.zoom.us/j/99413743466?pwd=VHpmQW9SR1A5bmpseVZMN2tPZVZOdz09"
  },
  ear: {
    name: "CS 3501: Embedded Computing & Robotics I",
    url: "https://collab.its.virginia.edu/portal/site/cdd921f5-3ec5-4de7-9bdc-da5f5a1e92c8",
    discussionurl: "discord://",
    specialurl: "https://learn.zybooks.com/zybook/VIRGINIACSECE3501Spring2021?selectedPanel=assignments-panel"
  },
  sts: {
    name: "STS 4600: The Engineer, Ethics, and Professional Responsibility",
    url: "https://collab.its.virginia.edu/portal/site/d360b679-581f-496d-8782-7053d86aefca",
    zoomurl: "https://virginia.zoom.us/j/93721024007?pwd=T1NJKzdrZG03L2pJN0dEQkcwUC91QT09"
  },
  apma: {
    name: "APMA 2501: Mathematics of Information",
    url: "http://www.ece.virginia.edu/~ffh8x/moi/",
    collaburl: "https://collab.its.virginia.edu/portal/site/0778b7b4-8cd8-440c-9fcb-bd8e74d5b9f3",
    discussionurl: "https://piazza.com/class/kknbo8nztqo6vg"
  }
};const viewHelpPage = function () {
  const data = Object.keys(COMMANDS).map(command => {
    const cmdData = COMMANDS[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      command: command
    };
  });
  const columns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }]; // $FlowFixMe - jQuery import

  $('#help-table').DataTable({
    data: data,
    columns: columns,
    order: [[1, "asc"]],
    paging: false
  });
  const classesData = Object.keys(CLASSES).map(command => {
    const cmdData = CLASSES[command];
    return {
      name: cmdData.name,
      url: cmdData.url,
      // $FlowFixMe - this is actually correct.
      command
    };
  });
  const classColumns = [{
    data: 'command',
    title: "Command"
  }, {
    data: 'name',
    title: "Name"
  }, {
    data: 'url',
    title: "URL"
  }]; // $FlowFixMe - jQuery import

  $('#classes-table').DataTable({
    data: classesData,
    columns: classColumns,
    order: [[1, "asc"]],
    paging: false
  });
};const redirect = async function (url) {
  await window.location.replace(url);
};

const bunnylol = async function (currCmd) {
  let arr = [];

  if (currCmd.startsWith("$")) {
    arr = currCmd.split(/[ $+]/g);
    arr[0] = "$";

    if (arr[1] === "") {
      arr = ["$"];
    }
  } else {
    arr = currCmd.split(/[ +]/g);
  }

  if (arr.length > 0) {
    const prefix = arr[0].endsWith(".") ? arr[0].substring(0, arr[0].length - 1).toLowerCase() : arr[0].toLowerCase();

    if (prefix in CLASSES) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const classData = CLASSES[prefix];

      if (arr.length > 1) {
        if (arr[1].toLowerCase() === "j" && classData.zoomurl) {
          await redirect(`${classData.zoomurl}`);
          return true;
        } else if (arr[1].toLowerCase() === "d" && classData.discussionurl) {
          await redirect(`${classData.discussionurl}`);
          return true;
        } else if (arr[1].toLowerCase() === "c" && classData.collaburl) {
          await redirect(`${classData.collaburl}`);
          return true;
        } else if (arr[1].toLowerCase() === "s" && classData.specialurl) {
          await redirect(`${classData.specialurl}`);
          return true;
        }
      }

      await redirect(`${classData.url}`);
      return true;
    }

    if (prefix in COMMANDS) {
      // $FlowFixMe - this is actually correct since the prefix is a key.
      const command = COMMANDS[prefix];
      const protocol = new URL(command.url).protocol;

      if (protocol !== "https:" && protocol !== "http:") {
        viewHelpPage();
      }

      if (command.searchurl && arr.length !== 1) {
        const searchParam = prefix !== "$" ? prefix.length + 1 : prefix.length;
        await redirect(`${command.searchurl}${encodeURIComponent(currCmd.substr(searchParam))}`);
        return true;
      } else {
        await redirect(command.url);
        return true;
      }
    }
  }

  return false;
};

const currCmd = new URL(window.location.href).searchParams.get("search") ?? "help";

switch (currCmd) {
  case "help" :
    viewHelpPage();
    break;

  default:
    bunnylol(currCmd).then(done => {
      if (!done && COMMANDS.DEFAULT.searchurl) {
        redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`);
      }
    }).catch(reject => {
      console.log(reject);
    });
    break;
}