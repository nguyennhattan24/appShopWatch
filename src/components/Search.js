import React, { useEffect, useState } from "react";
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native';
import styles from "../styles/productListStyle";
import { getProduct } from "../sevices/api";
const Search = () => {
    const [productDataApi, setProductDataApi] = useState();
    const getApiProduct = async () => {
        const result = await getProduct()
        setProductDataApi(result.data.data)
    };
    useEffect(() => {
        getApiProduct();
    }, [])

    const [text, onChangeText] = useState("Useless Text");
    return (
        <View>
            <TextInput style={styles.inPut}
                onChangeText={onChangeText}
                placeholder="Search"
                placeholderTextColor={'black'}
            />
            <FlatList
                data={productDataApi}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                style={styles.Flat}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <TouchableOpacity >
                                <Image
                                    source={{ uri: item.ImageProduct }}
                                    style={styles.ProductImg}
                                />
                            </TouchableOpacity>
                            <View style={styles.tleIn4}>
                                <Text style={styles.proPrice}>{item.NameProduct}</Text>
                            </View>
                            <View>
                                <Text style={styles.proTle}>Giá: {item.Price} đ</Text>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={(e, i) => i.toString()}
            />
        </View>

    )
}

export default Search
