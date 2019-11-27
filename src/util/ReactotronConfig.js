import Reactotron from 'reactotron-react-native'

Reactotron.configure({
  name: 'React Native Demo',
  host: '10.100.90.165',
})
  .useReactNative({
    asyncStorage: true,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: true,
    errors: {veto: stackFrame => false},
    overlay: false,
  })
  .connect()
