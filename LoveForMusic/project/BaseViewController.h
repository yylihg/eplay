//
//  BaseViewController.h
//  LoveForMusic
//
//  Created by yanlin.yyl on 2017/4/3.
//  Copyright © 2017年 wbk. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BaseViewController : UIViewController<MBProgressHUDDelegate>
@property (nonatomic, retain) MBProgressHUD *ToastView;//提示信息窗口

-(void) toast:(NSString *)urlString;
-(void)back;
@end
