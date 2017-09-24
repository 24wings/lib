declare var wx: any;
declare var WeixinJSBridge: any;
import { IOrderState, IShopType, IShopKeeperBatType, IFavoriteState, IBillContent, IBillType } from './index';

interface ShopKeeper {
    name: string;
}



interface Ticket {
    _id?: string;
    name?: string;
    createDt?: Date;
    lastModifyDt?: Date;
}

/**用户分为两种 一种User 普通的个人用户 一种 商家  */
interface User {
    _id?: string;
    sex?: number;
    nickname?: string;
    avatar?: string;
    phone?: string;
    openid?: string;
    //优惠券
    tickets?: Ticket[];
    password: string;
    headimgurl?: string;
    createDt?: string;
    lastModifyDt?: Date;
    shopingCar?: Product[];
    //收货地址
    reciveName?: string;
    contactPhone?: string;
    reciveCity?: { name: string, code: string };
    detailAddress?: string;
    favorites?: Product[];
    followShops?: ShopKeeper[];

}

interface ShopKeeper {
    _id?: string;
    nickname?: string;
    phone?: string;
    password?: string;
    shopName?: string;
    balance?: number;
    images?: string[];

    // 经营类别
    shopTag?: string | ShopTag;
    companyAddress?: City;
    detailAddress?: string;
    createDt?: Date;
    lastModifyDt?: Date;
    // 今日访客
    todayVisitorNum?: number;
    // 今日总交易额
    todayBussinessNum?: number;
    todayOrderNum?: number;


    // 企业认证
    organizationCode?: string;
    // 法人身份证号
    legalPersonId?: string
    //营业执照,图片
    license?: string[];
    // qq
    qq?: string;
    weixinId?: string;
    // 企业批发类型
    shopType?: IShopType;

}



interface ShopTag {
    _id?: string;
    name?: string;
    sort?: number;
    createDt?: Date;
    lastModifyDt?: Date;
}


interface Address {
    code?: number;
    data?: {
        //
        country?: string,
        country_id?: string,
        // 地区
        area?: string,
        // 40000 字符串 
        area_id?: string,
        // 省份
        region?: string,
        // 省份id
        region_id?: "420000",
        // 城市
        city?: string,
        // 城市id
        city_id?: string,
        county?: string,
        county_id?: string,
        isp?: string,
        isp_id?: string,
        // ip地址
        ip?: string
    }
}

interface City {
    code?: string;
    name?: string;
    children?: City[];

}


interface ProductTag {
    _id?: string;
    name?: string;
    sort?: number;
    category?: ProductCategory;
    createDt?: Date;
    lastModifyDt?: Date;
    metaDatas?: ProductMetaData[];
    checked?: boolean

}

interface ProductCategory {
    _id?: string;
    name?: string;
    sort?: number;
    createDt?: Date;
    productTags?: ProductTag[];
    metaDatas?: ProductMetaData[];
    lastModifyDt?: Date;
    checked?: boolean;
}

interface Product {
    _id?: string;
    checked?: boolean;
    images: string[];
    name?: string;
    brand?: string;
    productTag?: ProductTag;
    price?: number;
    transfer?: Transfer;
    summary?: string;
    createDt?: Date;
    lastModifyDate?: Date;
    active?: boolean;
    prices?: { keywords: string[], money: number, num: number }[];
    //产品参数
    datas?: { key: string, value: string }[];
    // 一键代发
    oneKeyToSend?: boolean;
    shopKeeper?: string;
    // 销售数量
    saleNum?: number;


    // 客户端多余的 收藏状态
    favoriteState?: IFavoriteState;
}

interface Transfer {
    _id?: string;
    name?: string;
    sort?: number;
    createDt?: Date;
    lastModifyDt?: Date;
}


interface ProductMetaData {
    _id?: string
    name?: string;
    options?: string[];
    createDt?: Date;
    lastModifyDt?: Date;
}


/**支付方式 */
declare enum PayMethod {
    WeiXin = 1,
    AliPay
}
interface Order {
    _id: string;
    product?: Product;
    price?: { keywords: string[], oneMoney: number, totalNum: number, totalMoney: number };
    createDt?: Date;
    user?: User;
    shopKeeper?: ShopKeeper;
    lastModifyDate?: Date;
    // 订单的状态
    orderState?: IOrderState;
    checked?: boolean;

    // order
    contactPhone?: String;
    recitveCity?: { name: string, code: string };
    detailAddress?: String;
    bill: { billType: IBillType, name: string, billContent: IBillContent };
    // 留言
    msg?: string;
    //支付方式
    payMethod?: PayMethod;
    // 支付时间
    payTime?: Date;
    // 支付用户的OpenId;
    payOpenId?: string;
    /**物流公司名字 */
    transferName?: string;
    // 物流单号
    transferId?: string;


}


interface ReciveAddress {
    _id?: string;
    user?: User;
    username?: string;
    contactPhone: string;
    detailAddress?: string;
    address?: { name: string, code: string };
    createDt?: Date;
    lastModifyDt?: Date;
    isDefault?: boolean;
}






interface Message {
    _id?: string;
    content?: string;
    user?: User;
}



/**需求 */
interface Need {
    _id?: string;
    title?: string;
    content?: string
    city?: { code: string, name: string };
    user?: User;
    createDt?: Date;
    lastModifyDt?: Date;
}


interface TransferCooperation {
    _id?: string;
    title?: string;
    content?: string;
    createDt?: Date;
    lastModifyDt?: Date;
    user?: User;


}