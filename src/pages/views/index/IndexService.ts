import { Injectable } from '@nestjs/common';

/**
 * DetailService
 *
 * @export
 * @class IndexService
 */
@Injectable()
export class IndexService {

	/**
	 * getDetailInfo
	 *
	 * @returns {*}
	 * @memberof IndexService
	 */
	public getIndexInfo(): any {
		return {
			title: 'Test page detail',
			content: 'test content detail'
		};
	}
}
