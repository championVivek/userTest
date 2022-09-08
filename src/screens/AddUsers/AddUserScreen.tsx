import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextField from '../../components/TextField'
import * as ImagePicker from 'expo-image-picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from "../../api/axios"
import { showMessage } from 'react-native-flash-message';
import styles from "./styles"

const AddUserScreen = () => {
    const [multipleImage, setMultipleImage] = useState<any>([]);
    const [video, setVideo] = useState<string>('');
    const [name, setName] = useState<string>('')
    const [discription, setDiscription] = useState<string>('')
    const [videoThumbnail, setVideoThumbnail] = useState<string>('')

    const pickMultipleImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setMultipleImage(result.selected);
        }
    };

    const pickVideoThumnail = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setVideoThumbnail(result.uri);
        }
    };

    const pickVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setVideo(result.uri);

        }
    };

    const handleSubmit = async () => {
        try {
            if (!name?.trim()) {
                Alert.alert('Name is required!')
                return
            }
            if (!discription?.trim()) {
                Alert.alert('Description is required!')
                return
            }
            const formdata = new FormData()
            formdata.append('name', name)
            formdata.append('user_id', '92')
            formdata.append('post_type', '1')
            formdata.append('discription', discription)
            formdata.append('videos', video)
            formdata.append('video_thumbnail', videoThumbnail)
            formdata.append('imagesAll', multipleImage)
            await api.post('/create_post', formdata, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            showMessage({
                message: "success",
                type: 'success'
            })
        } catch (error) {
            console.log(error);

            showMessage({
                message: "Something went wrong.",
                type: 'danger'
            })
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View>
                <TextField placeholder={'Name'} onChangeText={(text: string) => setName(text)} />
            </View>
            <View>
                <TextField placeholder={'Description'} onChangeText={(text: string) => setDiscription(text)} />
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.btnContainer}>
                    <Button onPress={pickMultipleImage} title="Select Image" color='orange' />
                </View>
                <View style={styles.btnContainer}>

                    <Button onPress={pickVideo} title="Select Video" color='tomato' />
                </View>
                <View style={styles.btnContainer}>
                    <Button onPress={pickVideoThumnail} title="Select Video Thumbnail" />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
                    <Text style={{ textAlign: 'center' }}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddUserScreen

