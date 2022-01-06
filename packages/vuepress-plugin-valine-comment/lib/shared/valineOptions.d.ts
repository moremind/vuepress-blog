export interface ValineOptions {
    /**
     * leancloud appId
     */
    appId: string;
    /**
     * leanCloud appKey
     */
    appKey: string;
    /**
     * 评论框占位提示符
     */
    placeholder: string;
    /**
     * 类型:String
     * 默认值:window.location.pathname
     * 必要性:false
     */
    path: string;
    /**
     * 类型:String
     * 默认值:mp
     * 必要性:false
     */
    avatar: string;
    /**
     * 类型:Number
     * 默认值:10
     * 必要性:false
     */
    pageSize: number;
    /**
     * 文章访问量统计。
     * 类型:Boolean
     * 默认值:false
     * 必要性:false
     */
    visitor: boolean;
    /**
     * 类型：Boolean
     * 默认值: true
     * 必要性: false
     */
    highlight: boolean;
    /**
     * 类型: Boolean
     * 默认值: false
     * 必要性: false
     */
    avatarForce: boolean;
    /**
     * 类型: Boolean
     * 默认值: false
     * 必要性: false
     */
    recordIP: boolean;
    /**
     * 类型: String
     * 默认值: http[s]://[tab/us].avoscloud.com
     * 必要性: false
     */
    serverURLs: string;
    /**
     * 类型: String
     * 默认值:
     * 必要性: false
     */
    emojiCDN: string;
    /**
     * 类型: Object
     * 默认值: null
     * 必要性: false
     */
    emojiMaps: object;
    /**
     * 类型: Boolean
     * 默认值: false
     * 必要性: false
     */
    enableQQ: boolean;
}
