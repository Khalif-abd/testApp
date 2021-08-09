import React, {useState} from 'react';
import { View, StyleSheet, ImageBackground} from 'react-native';
import { ToggleButton, useTheme } from 'react-native-paper';


const ToggleButtonExample = () => {
    const [like, setLike] = useState(false);

    const {colors: { background },
    } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: background }]}>

            <View style={[styles.padding, styles.row]}>
                <ToggleButton.Group value={like} onValueChange={()=>setLike(!like)}>
                    <ImageBackground
                        style={{
                            width: 143,
                            height: 153,
                            margin: 2,
                        }}
                        source={{uri: 'https://images.pexels.com/photos/1068534/pexels-photo-1068534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',}}>
                        <ToggleButton
                            value="watermelon"
                            size={24}
                            style={{
                                position: 'absolute',
                                right: 0,
                            }}
                            color="white"
                            icon={like? 'heart' : 'heart-outline'}
                        />

                    </ImageBackground>
                </ToggleButton.Group>
            </View>
        </View>
    );
};

ToggleButtonExample.title = 'Toggle Button';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    padding: {
        paddingHorizontal: 16,
    },
    row: {
        flexDirection: 'row',
    },
});

export default ToggleButtonExample;