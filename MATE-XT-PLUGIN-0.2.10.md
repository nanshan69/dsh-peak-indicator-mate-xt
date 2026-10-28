# Mate XT UI 插件保存说明

当前可复用版本：`dsh-peak-indicator@0.2.10`。

## 当前状态

- 源码目录：`dsh-peak-indicator-relay-branch-source/`
- 已安装目录：`/data/storage/el2/base/haps/phone/files/dsh/home/profiles/ondevice/node_modules/dsh-peak-indicator`
- profile 依赖：`dsh-peak-indicator: ^0.2.10`
- 设备重启后由 ondevice profile 自动加载，无需每次重新编辑 CSS。

## 以后继续使用

1. 保留本目录或 `dsh-peak-indicator-0.2.10-mate-xt.zip` 备份。
2. 若 DSHM 没有更换 profile，直接重启应用即可继续使用。
3. 若升级/重装覆盖了插件目录，恢复源码包到 ondevice profile 的插件目录，再重启 DSHM。
4. 修改插件后，必须重启 DSHM，刷新页面只适用于已经重新挂载插件的进程。

## 公开 GitHub 仓库

- 仓库：https://github.com/nanshan69/dsh-peak-indicator-mate-xt
- 直接安装：`pnpm add github.com/nanshan69/dsh-peak-indicator-mate-xt#main`
- 带 profile 的 CLI：`dsh plugin --profile web add github.com/nanshan69/dsh-peak-indicator-mate-xt#main`
- 安装后重启 DSHM；桌面 profile 将 `web` 换成实际 profile 名。


- 单屏、双屏、全展开三折屏顶栏布局。
- 标题和状态区紧凑上移。
- 单屏状态操作区分组换行。
- 展开屏正文宽度放宽。
- 侧栏收起时左上唤醒按钮；侧栏展开时左侧栏标题行右上切换按钮。

设备视觉验收仍以重启当前版本后实际截图为准。
