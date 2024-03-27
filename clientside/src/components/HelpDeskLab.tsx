import React from "react";

const HelpDeskLab: React.FC = () => {
    return (<>
        <div className="container-lg">
            <h1 className="heading center">Help Desk Lab</h1>
            <div className="my-16">
                 <h2 className="sub-heading">Remote Desktop</h2>
                <h3 className="bg-white mt-12">Windows 10 Remote</h3>
                <p>Firstly, we will make sure the user computer has remote access
                on by going to "ThisPC", right clicking for properties, remote settings,
                and using helpdesk or admin credentials if required. Next, we will check allow remote connections
                and allow remote desktop connection on helpdesk computer and type in computer on server that you
                are trying to connect to. If you can't use open remote desktop go to user computer's command line and type
                "ipconfig /flushdns" and retry. You will be logged in as yourself but in control of someones computer.
                Go to "ThisPC", users, click the user of interest, and hit continue. Now you can add stuff, or mess with account
                directories/folders. You can also mess with apps by adding "\appdata\" to user account path.</p>
                <h3 className="bg-white mt-12">Remote Registry</h3>
                <p>In helpdesk computer, go to start menu, windows administration tools, and open Registry Editor.
                    You may have to enable remote administration for registry. In that case, go to users computer, open
                    their start menu, type "services" and run services app as administrator. Next, double click
                    Remote Access Connection Manager and run, do the same with Remote Registry. Set the startup type as automatic,
                    hit apply, start, and then ok. Go back to helpdesk computer and in Registry Editor click file, and then type the
                    users computer name in. Be careful don't break the whole computer from Registry! Something neat you can do here is go
                    to Network and see if shared drive is there.
                </p>
                <h3 className="bg-white mt-12">Remoting with c$</h3>
                <p>
                    Go to file explorer and in search bar type \\&#123;computername	&#125;\c$, go into users, and go to &#123;user's&#125; account.
                </p>
                <h3 className="bg-white mt-12">Windows remote tool (windows remote assitance) file invitation</h3>
                <p>
                    Open windows rmeote assistance to help someone who has invited you. Go into computer that you are trying to remote into, go tool
                    file explorer, right click "ThisPC", click manage, go to groups, remote desktop users, see if the helpdesk account is there. Next,
                    go to "inveite someone to connect to your PC and help you" from the start menu. Invite someone to help you and save this invitation
                    as a file on the desktop. Go back to the helpdesk computer, and press use an invitation file. Remote into computer with c$ with c$\\&#123;computername\&#125;
                    in file explorer, go to users, &#123;user account&#125;, desktop, and open invitation file. The password to acess users computer is given by user.
                </p>
            </div>
            <div className="my-16">
                <h2 className="sub-heading">Static IP and DHCP</h2>
                <h3 className="bg-white mt-12">How to tell if IP is statically assigned to device</h3>
                <p>
                    You can use "ipconfig /all" in the command line and if you see "DHCP Enabled: Yes", the IP is not static. Otherwise, if you see "DHCP Enabled: No", the IP is
                    static.
                </p>
                <h3 className="bg-white mt-12">How to set up static IP address</h3>
                <p>
                    Go to control panel and click on "view network status and task". Hit change adapter settings, next hit properties, got to IPV4. From there you can assigne
                    a static IP address.
                </p>
                <h3 className="bg-white mt-12">How to set up static IPs in virtual machine</h3>
                <p>
                    Go to control panel and click on "view netowrk status and task". Go to change adapter settings, internet, properties, IPV4, and give static IP address. Next,
                    go to devices in vitural machine OS, go to network, and change to Host-only adapter.
                </p>
                <h3 className="bg-white mt-12">Removing virtual machine static IP and putting on DHCP</h3>
                <p>
                    Go to control panel, and open view netowrk status and task. Next, go to networks IPv4 and put back to default/DHCP settings. Go to virtual machine devices,
                    click network, and change to bridged adapter. You can also enabled promiscuous mode.
                </p>
            </div>
            <div>
                <h2 className="sub-heading">Installing Inwdows Server 2016</h2>
                <h3 className="bg-white mt-12">Installing windows server 2016 &#40;desktop experience&#41;</h3>
                <p>
                    Download the ISO file from windows side for virtual machine use. Use you have booted on virtual machine, now its time to install the desktop experience version.
                    Select understable lanaguage / keyboard. Click install now and choose "Desktop Experience" Windows Server 2016 OS. Custom install only, and create administrator
                    account password. remember to use ctrl-alt-del to prompt for password on login screen. Remove the VM disk as we don't need it anymore. Click "Yes" for Networks pop-up.
                    Check to see if Server Manager application exist. Change the computer name to something such as &#40;Server2016&#41;. Optionally, you can adjust you OS to be set for
                    best performance to decrease possible lag from here.
                </p>
                
            </div>
        </div>
        

            </>);
}

export default HelpDeskLab;