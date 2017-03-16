/**
 * BaseResponseResultInfo
 */
export class BaseResponseResultInfo {
    /**是否成功 */
    IsSuccess: boolean;
    /**响应信息 */
    Message: string;
    constructor() {

    }
}

/**
 * ResponseResultInfo 响应结果
 */
export class ResponseResultInfo<T> extends BaseResponseResultInfo {
    /**响应结果实体 */
    Result: T;
}