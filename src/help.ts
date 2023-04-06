import type {CommandNames, CommandDataTableType, ColumnDataTableType} from './commands';

import {COMMANDS} from './commands';

export const viewHelpPage: () => void = function(){
    const data: Array<CommandDataTableType> = (Object.keys(COMMANDS) as Array<CommandNames>).map((command: CommandNames) => {
        const cmdData = COMMANDS[command];
        return {
            name: cmdData.name, 
            url: cmdData.url, 
            command: command
        };
    });
    const columns: Array<ColumnDataTableType> = [
        {data: 'command', title: "Command"}, 
        {data: 'name', title: "Name"}, 
        {data: 'url', title: "URL"}, 
    ];

    $('#help-table').DataTable({
        data: data,
        columns: columns,
        order: [[ 1, "asc" ]],
        paging: false
    });
}
