import {
	CacheInterceptor,
	Controller,
	Get,
	Render,
	UseInterceptors
} from '@nestjs/common';
import { AppService } from './app.service';

/**
 * 顶层控制器
 *
 * @export
 * @class AppController
 */
@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
	constructor(private readonly appService: AppService) {}

	/**
	 * 首页入口
	 *
	 * @returns {*}
	 * @memberof AppController
	 */
	@Get()
	@Render('Index')
	public root(): any {
		return this.appService.root();
	}
}
