import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
    Content, Card, CardItem, Thumbnail,
    Text, Button, Icon, Left, Body, Right, DeckSwiper
} from 'native-base';
import StarRating from 'react-native-star-rating';
import Dialog from "react-native-dialog";

const cards = [
    {
        image: require('../../assets/images/xe_khach1.jpg'),
    },
    {
        image: require('../../assets/images/xe_khach2.jpg'),
    },
];

class HomePageItem extends Component {


    constructor(props) {
        super(props);
        this.state = {
            starCount: this.props.numberStar
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    coachDetail = () => {
        this.setState({ dialogVisible: true });
    };

    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };

    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.slide}>
                <Image source={this.props.imgCoach} style={{ height: 200, width: null, flex: 1 }} />
            </View>
        );
    }

    render() {
        return (
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <TouchableOpacity onPress={this.coachDetail} style={{ flexDirection: 'row' }}>
                                <Thumbnail source={this.props.imgCoach} />
                                <Body>
                                    <Text>{this.props.nameCoach}</Text>
                                    <Text note>{this.props.licensePlates}</Text>
                                </Body>
                                <Dialog.Container visible={this.state.dialogVisible}>
                                    <Dialog.Title>Account delete</Dialog.Title>
                                    <Dialog.Description>
                          
                                            <DeckSwiper dataSource={cards} dataSource={cards}
                                                renderItem={item =>
                                                    <View style={{ elevation: 3 }}>
                                                        <View cardBody>
                                                            <Image style={{ height: 300, flex: 1 }} source={item.image} />
                                                        </View>
                                                    </View>
                                                }>

                                            </DeckSwiper>
                                   
                                    </Dialog.Description>
                                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                                </Dialog.Container>
                            </TouchableOpacity>
                        </Left>
                        <Right>
                            <StarRating
                                fullStarColor={"blue"}
                                disabled={true}
                                starSize={15}
                                maxStars={5}
                                rating={this.state.starCount}
                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                            />
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={this.props.imgCoach} style={{ height: 200, width: null, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <View>
                                <Text style={styles.numberOfSeat}>Số chỗ còn lại: 10</Text>
                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                    <Text style={styles.numberOfSeat}>Đang chạy </Text>
                                    <Icon name="circle" type="FontAwesome" style={{ fontSize: 8, color: "#00e600", paddingTop: 2 }}></Icon>
                                </View>
                            </View>
                        </Left>
                        <Body>
                            <Text style={styles.numberOfSeat}>(Nam Định - Hà Nội)</Text>
                            <Text style={styles.numberOfSeat}>(Hà Nội - Nam Định)</Text>
                        </Body>
                        <Right>
                            <Button height={30}>
                                <Text>Đặt xe</Text>
                            </Button>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    numberOfSeat: {
        fontSize: 10,
        padding: 1
    }
})

export default HomePageItem;