import React from 'react';
import styled from 'styled-components';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { imageTransfer } from '../api';
import currentPhoto from './CameraScreen';

// let photos = []; // 모델 계산후 얻은 [원본, 결과] 사진 리스트 저장용

const CenterView = styled.View`
    background-color: white;
`;

const IconBarAfter = styled.View`
    margin-top: 30px;
`;

const IconContainerAfter = styled.View`
    width: 100%;
    height: 22%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
`;

class PhotoCheckScreen extends React.Component {
    getTransferImage = async () => {
        try {
            let photos = await imageTransfer(currentPhoto);

            await this.cameraRef.current.resumePreview();
            this.setState({
                isPreview: false,
                isAfterview: true,
                isSaved: false,
            });
            return photos;
        } catch (error) {
            console.log(`getTransferImage Error: ${error}`);
        }
    };

    cancelPreviewBtn = async () => {
        await this.cameraRef.current.resumePreview();
        this.setState({
            isPreview: false,
            imageComeback: false,
            isAfterview: false,
        });
    };

    render() {
        return (
            <CenterView>
                <IconContainerAfter>
                    <IconBarAfter>
                        <TouchableOpacity onPress={this.getTransferImage}>
                            <FontAwesome
                                name="check-circle"
                                color="black"
                                size={40}
                            />
                        </TouchableOpacity>
                    </IconBarAfter>
                    <IconBarAfter>
                        <TouchableOpacity onPress={this.cancelPreviewBtn}>
                            <Entypo
                                name="circle-with-cross"
                                color="black"
                                size={40}
                            />
                        </TouchableOpacity>
                    </IconBarAfter>
                </IconContainerAfter>
            </CenterView>
        );
    }
}

export default PhotoCheckScreen;
