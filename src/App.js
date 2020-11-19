import * as React from 'react';
// import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

import CameraScreen from './screens/CameraScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import PhotoCheckScreen from './screens/PhotoCheckScreen';
import ResultPhotoScreen from './screens/ResultPhotoScreen';

// const Stack = createStackNavigator();

const App = createStackNavigator({
    Camera: { screen: CameraScreen },
    Notification: { screen: NotificationsScreen },
    PhotoCheck: { screen: PhotoCheckScreen },
    ResultPhoto: { screen: ResultPhotoScreen },
});

// const App = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator>
//                 <Stack.Screen name="Camera" component={CameraScreen} />
//                 <Stack.Screen
//                     name="Notifications"
//                     component={NotificationsScreen}
//                 />
//                 <Stack.Screen name="PhotoCheck" component={PhotoCheckScreen} />
//                 <Stack.Screen
//                     name="ResultPhoto"
//                     component={ResultPhotoScreen}
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// };

export default App;
