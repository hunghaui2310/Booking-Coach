import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import HomePageItem from './HomePageItem';

const DATA = [
    {
        nameCoach: 'Phượng Hưng',
        licensePlates: '18Y1 54324',
        numberStar: 5,
        imgCoach: require('../../assets/images/xe_khach2.jpg')
    },
    {
        nameCoach: 'Tấn Tạo',
        licensePlates: '18D1 87653',
        numberStar: 5,
        imgCoach: require('../../assets/images/xe_khach1.jpg')
    },
    {
        nameCoach: 'Hà Trang',
        licensePlates: '18B1 42121',
        numberStar: 4.5,
        imgCoach: require('../../assets/images/xe_khach2.jpg')
    },
];


class HomePage extends Component {

    render() {
        return (
            <>
                <FlatList 
                data={DATA}
                renderItem={({ item }) =>
                    <HomePageItem nameCoach={item.nameCoach} licensePlates={item.licensePlates} 
                    numberStar={item.numberStar} imgCoach={item.imgCoach} />}
                    keyExtractor={item => item.licensePlates} 
                />
            </>
        );
    }
}

export default HomePage;