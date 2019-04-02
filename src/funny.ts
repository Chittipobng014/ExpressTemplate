(async () => {
    //     const x = new Date("2019-03-28T00:00:00.000Z")
    const s = "2019-03-12T00:00:00.000Z"
    const e = "2019-03-27T23:59:59.000Z"
    const y = "2019-03-26T02:33:06.410Z"
    const t = "2019-03-28T02:33:06.410Z"
    console.log(s < y && t > e)
    // const date = new Date(new Date(new Date(x)).setUTCHours(-8, 0, 0, 0))
    // const d = new Date(new Date(new Date(x)).setUTCHours(0, 0, 0, 0)).getTimezoneOffset()
    // const d = new Date(new Date(new Date(x)).setUTCHours(0, 0, 0, 0)).toLocaleString("en-US", { timeZone: "Asia/Singapore" })
    // const d = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds()
    // console.log(d)
})()