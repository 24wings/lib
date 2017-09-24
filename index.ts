export * from './lib.module';
export * from './service';

export enum ActionType {
    FIND,
    UPDATE,
    NEW,
    DELETE,
    FINDONE,
    FindByKeyword,
    //创建多个
    CreateMany
}


export enum BillType {
    Person = 1,
    Company
}

/**发票内容   详情   无需发票 */
export enum BillContent {
    Detail = 1,
    No,
}

export enum FavoriteState {
    UnFavorite = 1,
    HadFavorite = 2
}

export enum ShopKeeperBatType {
    Region = 1,
    //厂家批发
    Origin,
    Town
}
export enum ShopType {
    // 厂家批发
    FactoryBat = 1,
    //省城批发
    RegionBat,
    //本地批发
    LocalBat


}


// 订单状态
export enum OrderState {
    // 待付款
    Unpay = 1,
    // 待发货
    UnSend,
    // 待收货
    UnRecive,
    // 待评论
    UnComment,
    // 退款中
    ReturnMoney
}