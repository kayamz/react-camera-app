import React from 'react';
import styled from 'styled-components';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Dimensions, TouchableOpacity, Image } from 'react-native';
import photos from './PhotoCheckScreen';

const { width, height } = Dimensions.get('window');

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

class ResultPhotoScreen extends React.Component {
    render() {
        return (
            <CenterView>
                <Image
                    style={{
                        width: width - 1,
                        height: height / 1.4,
                        marginTop: 50,
                        position: 'absolute',
                    }}
                    source={{ uri: photos[1] }}
                />
                <IconContainerAfter>
                    <IconBarAfter>
                        <TouchableOpacity onPress={this.saveResultPhoto}>
                            <FontAwesome name="save" color="black" size={40} />
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

export default ResultPhotoScreen;
