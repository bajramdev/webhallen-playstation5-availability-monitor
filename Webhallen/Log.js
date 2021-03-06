let Log = {}

Log.Info = (message) => {
    console.log('[INFO]', message)
}

Log.Warning = (message) => {
    console.log('[WARNING]', message)
}

Log.Error = (message) => {
    console.log('[ERROR]', message)
}

module.exports = Log;