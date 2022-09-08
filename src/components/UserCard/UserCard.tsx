import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from "./styles"

type Props = {
    data: {
        name: string;
        designation: string;
        discription: string;
        like_count: string;
        comment_count: string;
        post_day: string;
        profile_image: string;
    }
}

const UserCard: React.FC<Props> = ({ data }) => {

    const renderText = (key: string, value: string) => (
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{key} </Text>
            <Text style={styles.text2}> {value}</Text>
        </View >
    )

    return (
        <View style={styles.container}>
            {data.profile_image && <Image
                source={{ uri: data.profile_image }}
                style={styles.img}
            />}
            <View style={styles.View2}>
                {renderText('Name:', data.name)}
                {renderText('Designation:', data.designation)}
                {renderText('Description:', data.discription)}
                {renderText('Likes:', data.like_count)}
                {renderText('Comments:', data.comment_count)}
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.lowerText}>{data.post_day}</Text>
            </View>
        </View>
    )
}

export default UserCard

