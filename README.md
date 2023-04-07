# BunnyLOL
Address bar enhanced.

## Example Commands
[See here](https://hanlindev.github.io/bunnylol)

## Setup

1. Open Chrome and click the three dots. Click `Settings` and scroll down to `Search Engines`.

2. Click `Manage Search Engines`.

3. Add a new search engine with the URL being `https://hanlindev.github.io/bunnylol?search=%s`. Of course, you should change the `hanlindev.github.io` part to your own domain (or just use mine, but I'll add more customized commands in future)

4. Make this the default search engine.

## Adding a command

1. Run `yarn` (feel free to use `npm`)

2. Open up the `src/commands.ts` file. Add your command to the `COMMANDS` object. You must include a `name` and `url` attribute and you can add an additional `searchurl` attribute if you would to be able to type a command like `yt NBA Highlights` (in which case, `bunnylol` will automatically search for NBA Highlights on YouTube).

3. Run `yarn build`.

4. Publish to your website.
