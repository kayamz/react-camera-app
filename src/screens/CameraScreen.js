import React from 'react';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import styled from 'styled-components';
import { Dimensions, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

let currentPhoto = ''; // 찍은 사진 저장용

const { width, height } = Dimensions.get('window');

const { navigate } = this.props.navigation;

const CenterView = styled.View`
    background-color: white;
`;

const IconContainer = styled.View`
    width: 100%;
    flex-direction: row;
    padding-bottom: 120px;
    justify-content: space-around;
    align-items: center;
`;

const IconBar = styled.View`
    margin-top: 30px;
`;

class CameraScreen extends React.Component {
    getPhotos = async () => {
        const { uri } = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: false,
            quality: 1,
            base64: true,
            saveToPhoto: false,
        });
        if (!uri) {
            this.setState({ hasPermission: true });
        } else {
            this.setState({
                image: uri,
                imageSelected: true,
                imageComeback: true,
                isSaved: false,
            });
        }
    };

    takePhoto = async () => {
        try {
            if (this.cameraRef.current) {
                const options = { quality: 1, base64: true };
                let photo = await this.cameraRef.current.takePictureAsync(
                    options,
                );
                const source = photo.uri;
                console.log(source);
                if (source) {
                    await this.cameraRef.current.pausePreview();
                    this.setState({ isPreview: true });
                }
                const base64Photo = photo.base64;
                currentPhoto = base64Photo; // 여기서 나오는 return 값은 [원본사진, 합성후 사진]
            }
        } catch (error) {
            alert(`error: ${error}`);
        }
        return currentPhoto;
    };

    switchCameraType = () => {
        const { cameraType } = this.state;
        if (cameraType === Camera.Constants.Type.front) {
            this.setState({
                cameraType: Camera.Constants.Type.back,
            });
        } else {
            this.setState({
                cameraType: Camera.Constants.Type.front,
            });
        }
        return cameraType;
    };

    render() {
        return (
            <CenterView>
                <Camera
                    style={{
                        width: width - 1,
                        height: height / 1.4,
                        marginTop: 50,
                    }}
                    type={this.switchCameraType()}
                    ref={this.cameraRef}
                />
                <IconContainer>
                    <IconBar>
                        <TouchableOpacity onPress={this.getPhotos}>
                            <FontAwesome
                                name="picture-o"
                                color="black"
                                size={30}
                            />
                        </TouchableOpacity>
                    </IconBar>
                    <IconBar>
                        <TouchableOpacity onPress={this.takePhoto}>
                            <MaterialCommunityIcons
                                name="circle-slice-8"
                                color="black"
                                size={100}
                            />
                        </TouchableOpacity>
                    </IconBar>
                    <IconBar>
                        <TouchableOpacity onPress={this.switchCameraType}>
                            <MaterialCommunityIcons
                                name={'camera-retake-outline'}
                                color="black"
                                size={40}
                            />
                        </TouchableOpacity>
                    </IconBar>
                </IconContainer>
            </CenterView>
        );
    }
}

export default CameraScreen;
