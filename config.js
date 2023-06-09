module.exports = {
    app: {
        token: 'MTExNjU4NzQxOTUxMzQwOTU5Ng.Gp8mpO.JiKCDlc5sKdujNvG813HnYoYYlB6qczlRIbxx4',
        playing: 'by Watashi  ❤️',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
