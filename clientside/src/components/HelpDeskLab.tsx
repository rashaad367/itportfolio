import React from "react";

const HelpDeskLab: React.FC = () => {
    return (<>
        <div className="container-lg">
            <h1 className="heading center">Help Desk Lab</h1>
            <h2>Remote Desktop</h2>
            <h3>Windows 10 Remote</h3>
            <p>Firstly, we will make sure the user computer has remote access
                on by going to "ThisPC", right clicking for properties, remote settings,
                and using helpdesk or admin credentials if required. Next, we will check allow remote connections
                and allow remote desktop connection on helpdesk computer and type in computer on server that you
                are trying to connect to. If you can't use open remote desktop go to user computer's command line and type
                "ipconfig /flushdns" and retry. You will be logged in as yourself but in control of someones computer.
                Go to "ThisPC", users, click the user of interest, and hit continue. Now you can add stuff, or mess with account
                directories/folders. You can also mess with apps by adding "\appdata\" to user account path.</p>
            <h3>Remote Registry</h3>
            <p>In helpdesk computer, go to start menu, windows administration tools, and open Registry Editor.
                You may have to enable remote administration for registry. In that case, go to users computer, open
                their start menu, type "services" and run services app as administrator. Next, double click
                Remote Access Connection Manager and run, do the same with Remote Registry. Set the startup type as automatic,
                hit apply, start, and then ok. Go back to helpdesk computer and in Registry Editor click file, and then type the
                users computer name in. Be careful don't break the whole computer from Registry! Something neat you can do here is go
                to Network and see if shared drive is there.
            </p>
        </div>
        

            </>);
}

export default HelpDeskLab;