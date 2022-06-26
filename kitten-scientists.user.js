// ==UserScript==
// @name        Kitten Scientists
// @namespace   http://www.reddit.com/r/kittensgame/comments/34gb2u/kitten_scientists_automation_script/
// @description Launch Kitten Scientists
// @include     *bloodrizer.ru/games/kittens/*
// @include     file:///*kitten-game*
// @include     *kittensgame.com/web/*
// @include     *kittensgame.com/beta/*
// @include     *kittensgame.com/alpha/*
// @version     1.5.0
// @grant       none
// @copyright   2015, cameroncondry
// ==/UserScript==

// ==========================================
// Begin Kitten Scientist's Automation Engine
// ==========================================

const kg_version = "小猫珂学家版本1.5.0";
const address = '1HDV6VEnXH9m8PJuT4eQD7v8jRnucbneaq';
let run = function() {
	const lang = (localStorage["com.nuclearunicorn.kittengame.language"] === 'zh') ? 'zh' : 'en';
	// Initialize and set toggles for Engine
	// =====================================
	const i18nData = {
		'en': {
			'option.observe': 'Observe Astro Events',
			'option.festival': 'Hold Festivals',
			'option.praise': 'Auto Praise',
			'option.shipOverride': 'Force Ships to 243',
			'option.autofeed': 'Feed Leviathans',
			'option.hunt': 'Hunt',
			'option.crypto': 'Trade Blackcoin',
			'option.embassies': 'Build Embassies (Beta)',
			'option.style': 'View Full Width',
			'option.steamworks': 'Turn on Steamworks',

			'filter.build': 'Building',
			'filter.craft': 'Crafting',
			'filter.upgrade': 'Upgrading',
			'filter.research': 'Researching',
			'filter.trade': 'Trading',
			'filter.hunt': 'Hunting',
			'filter.praise': 'Praising',
			'filter.faith': 'Order of the Sun',
			'filter.festival': 'Festivals',
			'filter.star': 'Astronomical Events',
			'filter.misc': 'Miscellaneous',

			'dispose.necrocorn': 'Kittens disposed of inefficient necrocorns',
			'blackcoin.buy': 'Kittens sold your Relics and bought {0} Blackcoins',
			'blackcoin.sell': 'Kittens sold your Blackcoins and bought {0} Relics',
			'act.feed': 'Kittens fed the Elders. The elders are pleased',
			'act.observe': 'Kitten Scientists have observed a star',
			'act.hunt': 'Sent {1} on {0} hunts',
			'act.build': 'Kittens have built a new {0}',
			'act.builds': 'Kittens have built a new {0} {1} times.',
			'act.craft': 'Kittens have crafted {0} {1}',
			'act.trade': 'Kittens have traded {0}x with {1}',

			'upgrade.space.mission': 'Kittens conducted a mission to {0}',
			'upgrade.space': 'Kittens conducted a {0}',
			'upgrade.race': 'Kittens met the {0}',
			'upgrade.building.pasture': 'Upgraded pastures to solar farms!',
			'upgrade.building.aqueduct': 'Upgraded aqueducts to hydro plants!',
			'upgrade.building.library': 'Upgraded libraries to data centers!',
			'upgrade.building.amphitheatre': 'Upgraded amphitheatres to broadcast towers!',
			'upgrade.upgrade': 'Kittens have bought the upgrade {0}',
			'upgrade.limited': 'Optimize {0}',
			'upgrade.unlimited': 'All {0}',
			'upgrade.tech': 'Kittens have bought the tech {0}',
			'upgrade.policy': 'Kittens have passed {0}',

			'festival.hold': 'Kittens begin holding a festival',
			'festival.extend': 'Kittens extend the festival',

			'build.embassy': 'Built {0} embassy for {1}',
			'build.embassies': 'Built {0} embassies for {1}',

			'act.praise': 'Praised the sun! Accumulated {0} faith to {1} worship',
			'act.sun.discover': 'Kittens have discovered {0}',
			'act.sun.discovers': 'Kittens have discovered {0} {1} times.',

			'ui.items': 'items',
			'ui.disable.all': 'disable all',
			'ui.enable.all': 'enable all',
			'ui.craft.resources': 'resources',
			'ui.trigger': 'trigger',
			'ui.trigger.set': 'Enter a new trigger value for {0}. Should be in the range of 0 to 1.',
			'ui.limit': 'Limited',
			'ui.trigger.shipOverride.set': 'Enter a new trigger value for {0}. Corresponds to the amount of ship needed before the exchange is made.',
			'ui.trigger.missions.set': 'Enter a new trigger value for missions. Should be in the range of 0 to 13. Corresponds to each planet sort',
			'ui.trigger.crypto.set': 'Enter a new trigger value for {0}. Corresponds to the amount of Relics needed before the exchange is made.',
			'ui.engine': 'Enable Scientists',
			'ui.build': 'Bonfire',
			'ui.space': 'Space',
			'ui.craft': 'Crafting',
			'ui.upgrade': 'Unlocking',
			'ui.trade': 'Trading',
			'ui.faith': 'Religion',
			'ui.time': 'Time',
			'ui.options': 'Options',
			'ui.filter': 'Filters',
			'ui.distribute': 'Kitten Resources',
			'ui.max': 'Max: {0}',

			'ui.upgrade.upgrades': 'Upgrades',
			'ui.upgrade.techs': 'Techs',
			'ui.upgrade.races': 'Races',
			'ui.upgrade.missions': 'Missions',
			'ui.upgrade.buildings': 'Buildings',
			'ui.upgrade.policies': 'Policies',
			'ui.upgrade.policies.load': 'Load',
			'ui.upgrade.policies.show': 'Show',

			'ui.faith.addtion': 'addition',
			'option.faith.best.unicorn': 'Build Best Unicorn Building First',
			'option.faith.best.unicorn.desc': 'Include auto Sacrifice Unicorns if tears are not enough to build the best unicorn building',
			'option.faith.transcend': 'Auto Transcend',
			'act.transcend': 'Spend {0} epiphany, Transcend to T-level: {1}',
			'summary.transcend': 'Transcend {0} times',
			'filter.transcend': 'Transcend',
			'option.faith.adore': 'Auto Adore the Galaxy',
			'act.adore': 'Adore the galaxy! Accumulated {0} worship to {1} epiphany',
			'summary.adore': 'Accumulated {0} epiphany by adore the galaxy',
			'filter.adore': 'Adoring',
			'adore.trigger.set': 'Enter a new trigger value for AutoAdore. Should be in the range of 0 to 1.\nKS will AutoAdore if the Solar Revolution Bonus brought by praising the sun once after adore can reach the trigger of maximum.\n\nNote: The solar revolution bonus will diminish after reaching 75% of the maximum.',

			'resources.add': 'add resources',
			'resources.clear.unused': 'clear unused',
			'resources.stock': 'Stock: {0}',
			'resources.consume': 'Consume: {0}',
			'resources.del': 'del',
			'resources.stock.set': 'Stock for {0}',
			'resources.consume.set': 'Consume rate for {0}',
			'resources.del.confirm': 'Delete resource controls for {0}?',

			'status.ks.enable': 'Enabling the kitten scientists!',
			'status.ks.disable': 'Disabling the kitten scientists!',
			'status.sub.enable': 'Enabled {0}',
			'status.auto.enable': 'Enable Auto {0}',
			'status.sub.disable': 'Disabled {0}',
			'status.auto.disable': 'Disable Auto {0}',

			'trade.limited': 'Trading with {0}: limited to only occur when profitable based off relative production time',
			'trade.unlimited': 'Trading with {0}: unlimited',
			'trade.seasons': 'seasons',
			'trade.season.enable': 'Enabled trading with {0} in the {1}',
			'trade.season.disable': 'Disabled trading with {0} in the {1}',

			'filter.enable': 'Enable {0} Filter',
			'filter.disable': 'Disabled {0} Filter',

			'craft.limited': 'Crafting {0}: limited to be proportional to cost ratio',
			'craft.unlimited': 'Crafting {0}: unlimited',

			'distribute.limited': 'Distribute to {0}: stop when reach max',
			'distribute.unlimited': 'Distribute to {0}: unlimited',
			'distribute.leaderJob': 'Leader Job: {0} ',
			'distribute.leaderTrait': 'Choose {0} Leader',
			'distribute.makeLeader': 'Make Leader',
			'act.distribute': 'Distribute a kitten to {0}',
			'act.distributeLeader': 'Make a {0} kitten leader',
			'ui.max.set': 'Maximum for {0}',
			'summary.distribute': 'Help {0} kittens to find job',
			'filter.distribute': 'Distribute',

			'option.promote': 'Promote Leader',
			'act.promote': 'Kittens\' leader has been promoted to rank {0}',
			'filter.promote': 'Promote leader',
			'summary.promote': 'Promoted leader {0} times',

			'ui.timeCtrl': 'Time Control',
			'option.accelerate': 'Tempus Fugit',
			'act.accelerate': 'Accelerate time!',
			'filter.accelerate': 'Tempus Fugit',
			'summary.accelerate': 'Accelerate time {0} times',
			'option.time.skip': 'Time Skip',
			'act.time.skip': 'Kittens combust Time crystal, {0} years skipped!',
			'ui.cycles': 'cycles',
			'ui.maximum': 'Maximum',
			'time.skip.cycle.enable': 'Enable time skip in cycle {0} and allow skip over this cycle',
			'time.skip.cycle.disable': 'Disable time skip in cycle {0} and disallow skip over this cycle',
			'time.skip.season.enable': 'Enable time skip in the {0}',
			'time.skip.season.disable': 'Disable time skip in the {0}',
			'time.skip.trigger.set': 'Enter a new trigger value for Time Skip (Combust time crystal). Should be a positive integer.',
			'summary.time.skip': 'Skip {0} years',
			'filter.time.skip': 'Time Skip',
			'option.time.reset': 'Reset Timeline (Danger!)',
			'status.reset.check.enable': 'Enable check {0} before Reset Timeline',
			'status.reset.check.disable': 'Disable check {0} before Reset Timeline',
			'ui.min': 'Min: {0}',
			'reset.check.trigger.set': 'Enter a new trigger value for {0}.\n-1 meaning must build this building until exceeding resource limit.',
			'reset.check': 'Trigger for {0} : {1}, you have {2}',
			'reset.checked': 'All conditions are met, the timeline will restart in next few seconds!',
			'reset.tip': 'You can cancel this reset by disable "Kitten Scientists" or "Time Control" or "Reset Timeline"',
			'reset.countdown.10': '10 - Harvesting catnip',
			'reset.countdown.9': '&nbsp;9 - Sacrificing Unicorns',
			'reset.countdown.8': '&nbsp;8 - Releasing lizards',
			'reset.countdown.7': '&nbsp;7 - Disassembling rail-guns',
			'reset.countdown.6': '&nbsp;6 - Starting time engines',
			'reset.countdown.5': '&nbsp;5 - Melting blackcoins',
			'reset.countdown.4': '&nbsp;4 - Turning off satellite',
			'reset.countdown.3': '&nbsp;3 - Opening temporal rifts',
			'reset.countdown.2': '&nbsp;2 - Boosting the chronoforge',
			'reset.countdown.1': '&nbsp;1 - Time engine start',
			'reset.countdown.0': '&nbsp;0 - Temporal rifts opened!',
			'reset.last.message': 'See you next poinciana recurrence',
			'reset.after': 'Nice to meet you, the cute Kittens Scientists will serve you',
			'reset.cancel.message': 'Timeline Reset canceled.',
			'reset.cancel.activity': 'Meoston, We Have a Problem.',
			'summary.time.reset.title': 'Summary of the last {0} timelines',
			'summary.time.reset.content': 'Gain {0} Karma.<br>Gain {1} Paragon.',
			'ui.close': 'close',

			'option.fix.cry': 'Fix Cryochamber',
			'act.fix.cry': 'Kittens fix {0} Cryochambers',
			'summary.fix.cry': 'Fix {0} Cryochambers',

			'summary.festival': 'Held {0} festivals',
			'summary.stars': 'Observed {0} stars',
			'summary.praise': 'Accumulated {0} worship by praising the sun',
			'summary.hunt': 'Sent adorable kitten hunters on {0} hunts',
			'summary.embassy': 'Built {0} embassies',
			'summary.feed': 'Fed the elders {0} necrocorns',
			'summary.tech': 'Researched: {0}',
			'summary.upgrade': 'Upgraded: {0}',
			'summary.building': 'Built: +{0} {1}',
			'summary.sun': 'Discovered: +{0} {1}',
			'summary.craft': 'Crafted: +{0} {1}',
			'summary.trade': 'Traded: {0}x {1}',
			'summary.year': 'year',
			'summary.years': 'years',
			'summary.separator': ' and ',
			'summary.day': 'day',
			'summary.days': 'days',
			'summary.head': 'Summary of the last {0}',
			'summary.show': 'Show activity',
		},
		'zh': {
			'option.observe': '观测天文现象',
			'option.festival': '举办节日',
			'option.praise': '赞美太阳',
			'option.shipOverride': '无视贸易船平衡',
			'option.autofeed': '献祭死灵兽',
			'option.hunt': '派出猎人',
			'option.crypto': '黑币交易',
			'option.embassies': '建造大使馆',
			'option.style': '占满屏幕',
			//'option.steamworks': '启动蒸汽工房',
			'option.useWorkers': '启用后台满速珂学家',

			'filter.build': '建筑',
			'filter.craft': '工艺制作',
			'filter.upgrade': '工坊升级',
			'filter.research': '科学研究',
			'filter.policy': '政策',
			'filter.upgBld': '营火建筑升级',
			'filter.trade': '贸易',
			'filter.embassy': '大使馆',
			'filter.hunt': '狩猎',
			'filter.praise': '赞美太阳',
			'filter.sacrifice': '献祭',
			'filter.faith': '太阳教团',
			'filter.festival': '举办节日',
			'filter.star': '天文现象',
			'filter.misc': '喵喵喵',

			'dispose.necrocorn': '小猫帮你处理掉了影响效率的多余死灵兽',
			'act.feed': '小猫向上古神献上祭品。上古神很高兴',
			'blackcoin.buy': '小猫花掉 {1} 遗物，加仓了 {0} 黑币',
			'blackcoin.sell': '小猫抛售 {1} 黑币，套现了 {0} 遗物',
			'act.observe': '小猫珂学家观测到一次天文现象',
			'act.hunt': '{0} 波{1}去打猎',
			'act.hunt.unicorn': '小猫急着派出猎人帮独角兽配种',
			'act.hunt.trade': '小猫贸易后决定去打猎',
			'act.build': '小猫建造了一个 {0}',
			'act.builds': '小猫建造了 {1} 个新的 {0}',
			'act.craft': ' {0} {1}',
			'act.trade': ' {1} 交易 {0} 次',

			'upgrade.space.mission': '小猫执行了 {0} 的任务',
			'upgrade.space': '小猫执行了 {0}',
			'upgrade.race': '小猫探险遇到了新的文明：{0}',
			'upgrade.upgrade': '{1}发明了 {0}',
			'upgrade.limited': '优化 {0}',
			'upgrade.unlimited': '全部 {0}',
			'upgrade.tech': '{1}研究了 {0}',
			'upgrade.policy': '小猫通过了 {0} 法案',

			'festival.hold': '小猫开始举办节日',
			'festival.extend': '小猫延长了节日',

			'build.embassy': '在 {1} 设立了 {0} 个大使馆',
			'build.embassies': '在 {1} 设立了 {0} 个大使馆',

			'act.praise': '赞美太阳! 转化 {0} 信仰为 {1} 虔诚',
			'parise.trigger.set': '输入新的赞美太阳的触发值，取值范围为 0 到 1的纯小数\n 当为0.98时且点出太阳革命，若虔诚太少小猫每天赞美太阳',
			'summary.praise.msg': '虔诚的小猫每天都会赞美太阳，直到太阳革命加成大于 {0} % (说你了虔诚太低了!)',
			'act.sun.discover': '小猫在宗教祷告了 {0} ',
			'act.sun.discovers': '小猫在宗教祷告了 {0} {1} 次',
			'act.sun.discovers.leader': '哲学家小猫在宗教祷告了 {0} {1} 次',

			'ui.items': '项目',
			'ui.disable.all': '全部禁用',
			'ui.enable.all': '全部启用',
			'ui.craft.resources': '资源',
			'ui.trigger': '触发条件',
			'ui.trigger.set': '输入新的 {0} 触发值，取值范围为 0 到 1 的纯小数。（参考珂学家说明书）',
			'ui.trigger.resource': '触发资源为',
			'ui.none': '无',
			'ui.limit': '限制',
			'ui.craftLimit': 'AI平衡',
			'ui.upgradesLimit': '优选',
			'ui.trigger.shipOverride.set': '输入一个新的 强制贸易船 触发值，\n即贸易船数量低于触发条件时，相当于未勾选贸易船AI平衡。',
			'ui.trigger.missions.set': '输入一个新的 探索星球 触发值,取值范围为 0 到 13 的整数。\n分别对应13颗星球。\n\n默认优先碧池探索，会暂时跳过沙丘',
			'ui.trigger.crypto.set': '输入一个新的 {0} 触发值，\n支持3个参数：-符号隔开数字参数\n第一个数字：当遗物数量大于触发值才会进行黑币交易\n第二个数字：买入的最高价（超过这价格就不会买了）\n第三个数字：卖出最低的价格。（低于这价格就不会卖出）\n默认10000-881-1060',
			'ui.engine': '启用小猫珂学家',
			'ui.build': '营火',
			'ui.space': '太空',
			'ui.craft': '工艺',
			'ui.upgrade': '升级',
			'ui.trade': '贸易',
			'ui.faith': '宗教',
			'ui.time': '时间',
			'ui.options': '选项',
			'ui.filter': '日志过滤',
			'ui.distribute': '喵喵管理',
			'ui.max': 'Max: {0}',

			'msg.catnip': '如果寒冬猫薄荷产量低于0，小猫珂学家会停止消耗猫薄荷',

			'ui.upgrade.upgrades': '工坊升级',
			'ui.upgrade.techs': '科学科技',
			'ui.upgrade.races': '探险者出发!',
			'ui.upgrade.missions': '探索星球',
			'ui.upgrade.buildings': '升级建筑',
			'ui.upgrade.policies': '政策',
			'ui.upgrade.policies.load': '读取',
			'ui.upgrade.policies.show': '列表',

			'ui.faith.addtion': '附加选项',
			'option.faith.best.unicorn': '自动最效率独角兽建筑',
			'option.faith.best.unicorn.desc': '自动献祭独角兽，并会以独角兽或象牙来决定建造独角兽牧场~象牙塔...太阳尖顶<br>当象牙不足时会切换成象牙模式具体可以点击小猫总结看到',
			'unicornSacrifice' : '小猫献祭了 {0} 独角兽，并获得了 {1} 滴独角兽的眼泪',

			'option.faith.transcend': '自动最佳次元超越',
			'summary.transcend.catnip': '次元超越再赞美群星后每秒猫薄荷产量过低：{0}，故取消次元超越了(自己补下农民)',
			'act.transcend': '消耗 {0} 顿悟，达到次元超越 {1}',
			'summary.transcend': '次元超越了 {0} 次',
			'filter.transcend': '次元超越',

			'option.faith.adore': '赞美群星',
			'act.adore': '赞美群星! 转化 {0} 虔诚为 {1} 顿悟',
			'act.adore.last': '下次小猫赞美群星，会等到虔诚大于 {0} ',
			'summary.adore': '通过赞美群星积累了 {0} 顿悟',
			'summary.adore.catnip': '赞美群星后每秒猫薄荷产量过低：{0}，故取消赞美群星了(自己补下农民)',
			'summary.adore.solar': '聪明的小猫已经会算期望了，当太阳革命加成到达：{0}% 后才会赞美群星',
			'summary.adore.last': '下次赞美群星会等到虔诚大于{0} ',
			'filter.adore': '赞美群星',
			'adore.trigger.set': '为赞美群星设定一个新触发值，取值范围为 0 到 1 的小数。（0.001为自动模式）\n\n同时满足以下条件珂学家将自动赞美群星。\n1. 赞美群星再赞美太阳后，需太阳革命加成 ≥ 触发值 * 1000%\n2. 当前信仰 / 信仰上限 ≥ 0.98(赞美太阳触发条件设置0.98配合使用)\n3.探索月球已完成\n4. 次元超越等级低于 11，需赞美群星后的猫薄荷产量＞0。\n推荐启用该功能多放几个农民，喵喵保护协会不允许饿死喵喵喵\n5. 次元超越等级低于 12，需当前虔诚＞上次赞美群星时候的虔诚',

			'resources.add': '添加资源',
			'resources.clear.unused': '清除未使用',
			'resources.stock': '库存: {0}',
			'resources.consume': '消耗率: {0}',
			'resources.del': '删除',
			'resources.stock.set': '设置 {0} 的库存',
			'resources.consume.set': '设置 {0} 的消耗率',
			'resources.del.confirm': '确定要取消 {0} 的库存控制?',

			'status.ks.enable': '神说，要有猫猫珂学家!',
			'status.ks.disable': '太敬业了，该歇了',
			'status.sub.enable': '启用 {0}',
			'status.auto.enable': '启用自动化 {0}',
			'status.sub.disable': '禁用 {0}',
			'status.auto.disable': '禁用自动化 {0}',

			'trade.limited': '贸易获得数量大于产量时才与 {0} 贸易，次数自动限制',
			'trade.limitedTitle': '根据产量和贸易获得数量',
			'trade.unlimited': '{1}与 {0} 的 贸易',
			'trade.seasons': '季节',
			'trade.season.enable': '启用在 {1} 与 {0} 的贸易',
			'trade.season.disable': '停止在 {1} 与 {0} 的贸易',
			'trade.catnip': '因猫薄荷储量过低，与鲨鱼贸易',

			'filter.enable': '过滤 {0}',
			'filter.disable': '取消过滤 {0}',

			'craft.force': '小猫为了研究{1}，偷偷使用了一些库存资源合成了{0}',
			'craft.forceSteel': '小猫为了工坊升级{0}，偷偷多使用了一些材料合成了钢',
			'craft.limited': '平衡{0}（理解为小猫AI控制触发条件、消耗率，挂机效率会比较高）',
			'craft.limitedTitle': '根据原材料和目标材料的数量',
			'craft.unlimited': '触发资源：{1}{0}',
			'craft.winterCatnip': '因寒冬猫薄荷产量低于0，故取消使用猫薄荷',

			'distribute.limited': '分配 {0} 受限于最大值',
			'distribute.leaderJob': '领袖工作为 {0} ',
			'distribute.leaderTrait': '领袖的特质为 {0} ',
			'distribute.unlimited': '分配 {0} 不受限',
			'distribute.makeLeader': '分配领袖',
			'act.distribute': '分配一只猫猫成为 {0}',
			'act.distribute.catnip': '担心你的猫猫没有猫薄荷吸并强制分配到农民',
			'act.distributeLeader': '分配一只 {0} 猫猫领袖',
			'ui.max.set': '设置 {0} 的最大值',
			'summary.distribute': '帮助 {0} 只偷吃猫薄荷的猫猫找到工作',
			'filter.distribute': '猫口分配',
			'set.leader': '{0}，喵喵喵！',

			'option.promote': '提拔领袖',
			'act.promote': '领袖被提拔到 {0} 级',
			'filter.leader': '领袖相关',
			'summary.promote': '提拔领袖 {0} 次',

			'ui.trigger.useWorkers.alert': '比如天文事件没观测、烧水晶慢，珂学家后台大概10才运行1次\n勾选将会在后台满速运行，注意会导致使用内存增多。\n电脑不好、内存< 8G的建议禁用\n推荐过滤全部日志会减少性能的消耗。\n\n需满足浏览器支持且游戏选项的web worker启用。\n确认后会自动重新勾选启用珂学家',
			'ui.timeCtrl': '时间操纵',
			'option.accelerate': '光阴似箭',
			'act.accelerate': '固有时制御，二倍速!',
			'act.accelerate.acl': '抓稳了，猫猫要开始加速了!',
			'act.accelerate.slow': '不行了，要减速了',
			'filter.accelerate': '光阴似箭',
			'summary.accelerate': '小猫加速时间 {0} 次',
			'option.time.skip': '时间跳转',
			'act.time.skip': '燃烧时间水晶, 跳过接下来的 {0} 年!',
			'ui.cycles': '周期',
			'ui.maximum': '单次数量',
			'time.skip.cycle.enable': '启用在 {0} 跳转时间并允许跳过该周期',
			'time.skip.cycle.disable': '停止在 {0} 跳转时间并禁止跳过该周期',
			'time.skip.season.enable': '启用在 {0} 跳转时间',
			'time.skip.season.disable': '停止在 {0} 跳转时间',
			'time.skip.trigger.set': '拥有时间水晶数量大于该触发值才会燃烧时间水晶，取值范围为正整数。\n注意会计算时间水晶库存\n周期默认全勾就行，珂学家会自动判断是否停在红月\n每2秒烧水晶次数固定为 0.04x时计炉(无千禧年0.02)，故单次数量进一法就行\n如果资源回复后资源一直是满的，建议过滤大部分日志\n\n故长挂推荐：触发条件500，单次数量1，周期全勾',
			'summary.time.skip': '跳过 {0} 年',
			'filter.time.skip': '时间跳转',

			'option.time.reset': '重启时间线 (弃用)',
			'status.reset.check.enable': '在重启时间线前检查 {0}',
			'status.reset.check.disable': '在重启时间线前不检查 {0}',
			'ui.min': 'Min: {0}',
			'reset.check.trigger.set': '为 {0} 设置新的触发值.\n-1 表示必须将此建筑建造至超过资源上限为止',
			'reset.check': '{0} 的触发值: {1}, 现在共有 {2}',
			'reset.checked': '所有条件都已满足，时间线将在几秒后重启!',
			'reset.tip': '你可以通过取消 "启用小猫珂学家" 或 "时间操控" 或 "重启时间线" 以取消此次重启',
			'reset.countdown.10': '10 - 正在收获猫薄荷',
			'reset.countdown.9': '&nbsp;9 - 正在献祭独角兽',
			'reset.countdown.8': '&nbsp;8 - 正在放生蜥蜴',
			'reset.countdown.7': '&nbsp;7 - 正在拆解电磁炮',
			'reset.countdown.6': '&nbsp;6 - 正在启动时间引擎',
			'reset.countdown.5': '&nbsp;5 - 正在融化黑币',
			'reset.countdown.4': '&nbsp;4 - 正在关闭卫星',
			'reset.countdown.3': '&nbsp;3 - 正在打开时空裂隙',
			'reset.countdown.2': '&nbsp;2 - 正在启动时间锻造',
			'reset.countdown.1': '&nbsp;1 - 时间引擎已启动!',
			'reset.countdown.0': '&nbsp;0 - 时空裂缝已打开!',
			'reset.last.message': '我们下个庞加莱回归再见',
			'reset.after': '初次见面，可爱的猫猫科学家为您服务',
			'reset.cancel.message': '重启时间线计划取消.',
			'reset.cancel.activity': '喵斯顿，我们有麻烦了.',
			'summary.time.reset.title': '过去 {0} 个时间线的总结',
			'summary.time.reset.content': '获得 {0} 业.<br>获得 {1} 领导力.',
			'ui.close': '关闭',

			'auto.countdown': '{0} 秒后将会自动启用珂学家',
			'auto.tip': '你可以通过取消 "首次自启珂学家" 以取消此次自动开启',

			'option.fix.cry': '修复冷冻仓',
			'act.fix.cry': '小猫修复了 {0} 个冷冻仓',
			'summary.fix.cry': '修复了 {0} 个冷冻仓',

			'summary.auto.biolab': '小猫为了节省合金发展，轨道测地学前不建造，太空制造前生物实验室优先级降低',
			'summary.auto.broadcastTower': '小猫为了节省钛用来发展，太空制造解锁后建造更多的广播塔',
			'summary.auto.craftLimited': '每次运行都会合成工艺(即无视触发条件)，数量AI自动。挂机发展速度会远大于触发条件的。',
			'summary.auto.harbor': '港口需要的金属板太多，小猫会少造亿点点(一定是斑马的阴谋',
			'summary.auto.hunter': '未发明弩和导航学，小猫当猎人欲望降低',
			'summary.auto.ironwood': '喵喵喵把铁收起来，希望住上向往的铁木小屋',
			'summary.auto.kittens': '计划生育! 猫粮产量不够了',
			'summary.auto.leader': '喵喵自觉顶替领袖，做特质相关项目。（领袖特质的具体效果可以参考右下角：百科-游戏标签-村庄-猫口普查）',
			'summary.auto.lower': '未研究轨道测地学，小猫为了发展更快，故降低牧场、水渠、图书馆、研究院、粮仓、港口、油井、仓库的优先度',
			'summary.auto.mansion': '小猫为了节省钛和钢用来发展，宅邸优先度降低（2倍多资源）',
			'summary.auto.oxidation': '为菈妮氧化反应，小猫把钢全存起来了',
			'summary.auto.pasture': '喵喵喵嫌弃了牧场，木材还是用来发展的好，真的是最后1个了',
			'summary.auto.steamworks': '小猫曰：蒸汽工房要与磁电机成双成对',
			'summary.auto.temple': '祷告太阳革命后才会建造神殿，真的不是偷懒喵',
			'summary.auto.tradepost': '祷告太阳革命前，根据黄金会减少交易所的建造',
			'summary.auto.workshop': '工坊只是解锁升级的 猫玩具罢了，现在小猫只愿意造1个工坊哦',
			'summary.auto.scienceBld': '天文台、研究院、生物实验室科学上限快满了才会建造。',
			'summary.auto.smelter': '神学前，小猫根据木材和矿物产量来控制熔炉上限',
			'summary.auto.academy': '小猫当科学快满了才会继续建造研究院',
			'summary.auto.unicorn': '最佳独角兽建筑：{0}',
			'summary.auto.upgPasture': '当勾选太阳能发电站了，并有足够钛的产量、且缺电、且猫薄荷产量足够高时，小猫会贴心的帮你卖出全部牧场后，升级太阳能发电站!',
			'summary.auto.upgAqueduct': '当勾选水电站了，有太阳能发电站、且缺电、且猫薄荷产量足够高时，小猫会贴心的帮你卖出全部水渠后，升级水电站!',
			'summary.auto.upgLibrary': '当勾选数据中心了，概要数量大于 150X图书馆数量 时，小猫会贴心的帮你卖出全部图书馆后，升级数据中心!',
			'summary.auto.upgAmphitheatre': '当有贸易船或者钛产量足够高时，小猫会贴心的帮你卖出全部剧场后，升级广播塔!',
			'summary.upgrade.building.pasture': '卖出牧场 并升级为 太阳能发电站 !',
			'summary.upgrade.building.aqueduct': '卖出水渠 并升级为 水电站 !',
			'summary.upgrade.building.library': '卖出图书馆 并升级为 数据中心!',
			'summary.upgrade.building.amphitheatre': '卖出剧场 并升级为 广播塔!',

			'summary.resource': '小猫自动调整资源: {0} 的消耗率',
			'summary.moon': '小猫停在红月周期散热 {0} 次',
			'summary.time.skip.moon': '由于燃烧时间水晶支出大于收入，小猫决定攒难得素，停留在红月 {0} 次!',

			'summary.blackcoin.buy': '小猫出售遗物并买入 {0} 次黑币',
			'summary.blackcoin.sell': '小猫出售黑币并买入了 {0} 次遗物',

			'summary.accelerator': '缺电啦，大概只有加速器能关闭了，不会影响库存',
			'summary.catnip': '呐，你的猫猫没有猫薄荷吸并强制分配 {0} 个农民',
			'summary.calciner': '小猫因为你工坊升级了钢铁工厂，故关闭了煅烧炉自动化（其效果铁和煤转化钢没有100%~具体右下角参考百科）（她真的好温柔，😭）',
			'summary.mint': '秋梨膏别开铸币厂了，它现在真的很不行（具体右下角参考百科 游戏标签-其它建筑-铸币厂，其转化效率与喵力上限有关）',
			'summary.pumpjack': '小猫担心冬季电不够并关闭了 {0} 次油井自动化',
			'summary.biolab': '小猫担心冬季电不够并关闭了 {0} 个生物实验室(关了后科学上限和科学加成还会加成)',
			'summary.biolab.test': ' {0} 个生物实验室(非常没用的工坊升级)',
			'summary.temporalAccelerator': '小猫担心卡顿打开了时空加速器的自动化',
			'summary.reactor': '小猫向反应堆投入了铀开始发光呐',
			'summary.factory': '小猫为了空间的发展，把工厂全部启用呐',
			'summary.steamworks': '小猫向蒸汽工房加了煤开始排蒸汽呐',
			'summary.breweryOn': '已举办文化节，喵星人重新打开了酿酒厂~嗝',
			'summary.breweryOff': '节日没呐，小猫拒奢守俭，暂时关闭了酿酒厂',
			'summary.brewery': '小猫根据节日调整了 {0} 次酿酒厂',
			'summary.chronocontrolOn': '小猫开启了时间操纵延长时间悖论的持续天数',
			'summary.chronocontrolOff': '小猫关闭了时间操纵节省电力',
			'summary.chronocontrol': '小猫根据时间悖论调整了 {0} 次时间操纵',

			'summary.marker': '没有黑金字塔小猫拒绝了神印的建造',

			'summary.festival': '举办了 {0} 次节日',
			'summary.stars': '观测了 {0} 次天文事件',
			'summary.praise': '通过赞美太阳积累了 {0} 虔诚',
			'summary.hunt': '派出了 {0} 批可爱的小猫',
			'summary.hunt.manager': '管理者领袖派出了 {0} 批可爱的小猫',
			'summary.embassy': '设立了 {0} 个大使馆',
			'summary.feed': '向上古神献祭 {0} 只死灵兽',
			'summary.tech': '{0}',
			'summary.upgrade': '{0}',
			'summary.building': '建造了 {0} 个 {1}',
			'summary.sun': '{1} {0} 次',
			'summary.craft': '制作了{0} 个 {1}',
			'summary.craftLeader': '工匠制作了 {0} 个 {1}',
			'summary.craftManuscript': '小猫偷偷使用了 {0} 次材料合成手稿，为了科学',
			'summary.craftCompedium': '小猫偷偷使用了 {0} 次材料合成概要，为了科学',
			'summary.craftBlueprint': '小猫偷偷使用了 {0} 次材料合成蓝图，为了科学',
			'summary.trade': '{1} 贸易了 {0} 次',
			'summary.year': '年',
			'summary.years': '年',
			'summary.separator': ' ',
			'summary.day': '天',
			'summary.days': '天',
			'summary.head': '过去 {0} 的总结',
			'summary.show': '小猫总结',
		},
	};
	if (!i18nData[lang]) {
		console.error(lang + ' not found');
		i18nData[lang] = i18nData['en'];
	}

	const i18n = function (key, args) {
		// i18n('$xx') mean load string from game
		// i18n('xx') mean load string from ks
		if (key[0] === "$") {
			return $I(key.slice(1));
		}
		let value = i18nData[lang][key];
		if (typeof value === 'undefined') {
			value = i18nData['en'][key];
			if (!value) {
				console.error('key "' + key + '" not found');
				return '$' + key;
			}
			console.error('Key "' + key + '" not found in ' + lang);
		}
		if (args) {
			for (let i = 0; i < args.length; i++) {
				value = value.replace('{' + i + '}', args[i]);
			}
		}
		return value;
	};

	const options = {
		// When debug is enabled, messages that go to the game log are also logged using window.console.
		debug: false,
		// The interval at which the internal processing loop is run, in milliseconds.
		interval: 2000,
		// The default color for KS messages in the game log (like enabling and disabling items).
		msgcolor: '#aa50fe', // dark purple
		// The color for activity summaries.
		summarycolor: '#009933', // light green
		// The color for log messages that are about activities (like festivals and star observations).
		activitycolor: '#E65C00', // orange
		// The color for resources with stock counts higher than current resource max
		stockwarncolor: '#DD1E00',
		// 复制的特质
		copyTrait: false,
		//倒计时
		countdown: 120,
		// 上次渲染的时间
		renderTime: 0,
		// The default consume rate.
		consume: 0.6,
		// The default settings for game automation.
		auto: {
			// Settings related to KS itself.
			engine: {
				// Should any automation run at all?
				enabled: false
			},
			// split form faith to make "Best Unicorn Building" easily
			unicorn: {
				items: {
					unicornPasture:     {require: false,         enabled: true,  variant: 'zp', label: i18n('$buildings.unicornPasture.label'), checkForReset: true, triggerForReset: -1},
					unicornTomb:        {require: false,         enabled: false, variant: 'z',  label: i18n('$religion.zu.unicornTomb.label'), checkForReset: true, triggerForReset: -1},
					ivoryTower:         {require: false,         enabled: false, variant: 'z',  label: i18n('$religion.zu.ivoryTower.label'), checkForReset: true, triggerForReset: -1},
					ivoryCitadel:       {require: false,         enabled: false, variant: 'z',  label: i18n('$religion.zu.ivoryCitadel.label'), checkForReset: true, triggerForReset: -1},
					skyPalace:          {require: false,         enabled: false, variant: 'z',  label: i18n('$religion.zu.skyPalace.label'), checkForReset: true, triggerForReset: -1},
					unicornUtopia:      {require: 'gold',        enabled: false, variant: 'z',  label: i18n('$religion.zu.unicornUtopia.label'), checkForReset: true, triggerForReset: -1},
					sunspire:           {require: 'gold',        enabled: false, variant: 'z',  label: i18n('$religion.zu.sunspire.label'), checkForReset: true, triggerForReset: -1},
				}
			},
			faith: {
				// Should religion building be automated?
				enabled: false,
				// At what percentage of the storage capacity should KS build faith buildings?
				trigger: 0,
				// 超越猫薄荷日志
				transcendCatnip: 0,
				// 赞美群星猫薄荷日志
				adoreCatnip: 0,
				// Additional options
				addition: {
					bestUnicornBuilding:    {enabled: true,  misc: true, label: i18n('option.faith.best.unicorn'), confirm: 0},
					autoPraise:             {enabled: true,  misc: true, label: i18n('option.praise'), subTrigger: 0.98,
						msg: 0, time: 0, expect: 0},
					// Former [Faith Reset]
					adore:                  {enabled: true, misc: true, label: i18n('option.faith.adore'), subTrigger: 0.001},
					transcend:              {enabled: true, misc: true, label: i18n('option.faith.transcend')},
				},
				// Which religious upgrades should be researched?
				items: {
					// Variant denotes which category the building or upgrade falls within in the Religion tab.
					// Ziggurats are variant z.
					// UNICORN BUILDING START
					// unicornPasture:     {require: false,         enabled: true,  variant: 'zp', label: i18n('$buildings.unicornPasture.label')},
					// unicornTomb:        {require: false,         enabled: false, variant: 'z'},
					// ivoryTower:         {require: false,         enabled: false, variant: 'z'},
					// ivoryCitadel:       {require: false,         enabled: false, variant: 'z'},
					// skyPalace:          {require: false,         enabled: false, variant: 'z'},
					// unicornUtopia:      {require: 'gold',        enabled: false, variant: 'z'},
					// sunspire:           {require: 'gold',        enabled: false, variant: 'z'},
					// UNICORN BUILDING END
					marker:             {require: 'unobtainium', enabled: false, max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
					unicornGraveyard:   {require: false,         enabled: false, max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
					unicornNecropolis:  {require: false,         enabled: false, max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
					blackPyramid:       {require: 'unobtainium', enabled: true,  max:-1, variant: 'z', checkForReset: true, triggerForReset: -1},
					// Order of the Sun is variant s.
					solarchant:         {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					scholasticism:      {require: 'faith',       enabled: true, max:3,   variant: 's', checkForReset: true, triggerForReset: -1},
					goldenSpire:        {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					sunAltar:           {require: 'faith',       enabled: true, max:-1,  variant: 's', checkForReset: true, triggerForReset: -1},
					stainedGlass:       {require: 'faith',       enabled: true, max:1,   variant: 's', checkForReset: true, triggerForReset: -1},
					solarRevolution:    {require: 'faith',       enabled: true, max:1,   variant: 's', checkForReset: true, triggerForReset: -1},
					basilica:           {require: 'faith',       enabled: true, max:5,   variant: 's', checkForReset: true, triggerForReset: -1},
					templars:           {require: 'faith',       enabled: true, max:5,   variant: 's', checkForReset: true, triggerForReset: -1},
					apocripha:          {require: 'faith',       enabled: true, max:1,   variant: 's', checkForReset: true, triggerForReset: -1},
					transcendence:      {require: 'faith',       enabled: true, max:1,   variant: 's', checkForReset: true, triggerForReset: -1},
					// Cryptotheology is variant c.
					blackObelisk:       {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackNexus:         {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackCore:          {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					singularity:        {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackLibrary:       {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blackRadiance:      {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					blazar:             {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					darkNova:           {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
					holyGenocide:       {require: false,         enabled: false, max:-1, variant: 'c', checkForReset: true, triggerForReset: -1},
				}
			},
			build: {
				// Should buildings be built automatically?
				enabled: false,
				// When a building requires a certain resource (this is what their *require* property refers to), then
				// this is the percentage of the storage capacity of that resource, that has to be met for the building
				// to be built.
				trigger: 0,
				// The items that be automatically built.
				// Every item can define a required resource. This resource has to be available at a certain capacity for
				// the building to be built. The capacity requirement is defined by the trigger value set for the section.
				//
				// Additionally, for upgradeable buildings, the item can define which upgrade stage it refers to.
				// For upgraded buildings, the ID (or internal name) of the building can be controlled through the *name*
				// property. For other buildings, the key of the item itself is used.
				items: {
					// production
					field:          {require: 'catnip',      enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					// craft bonuses
					workshop:       {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					factory:        {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					// housing
					hut:            {require: 'wood',        enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					logHouse:       {require: 'minerals',    enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					mansion:        {require: 'titanium',    enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					// conversion
					steamworks:     {require: false,         enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					magneto:        {require: false,         enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					reactor:        {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					smelter:        {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					calciner:       {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					mine:           {require: 'wood',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					lumberMill:     {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					oilWell:        {require: 'coal',        enabled: true, max:200,checkForReset: true, triggerForReset: -1},
					quarry:         {require: 'coal',        enabled: true, max:300,checkForReset: true, triggerForReset: -1},

					// science
					library:        {require: 'wood',        enabled: true, max:-1, stage: 0, checkForReset: true, triggerForReset: -1},
					dataCenter:     {require: false,         enabled: true, max:150, stage: 1, name: 'library', checkForReset: true, triggerForReset: -1},
					academy:        {require: 'wood',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					observatory:    {require: 'iron',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					biolab:         {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					pasture:        {require: 'catnip',      enabled: true, max:150, stage: 0, checkForReset: true, triggerForReset: -1},
					solarFarm:      {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'pasture', checkForReset: true, triggerForReset: -1},
					aqueduct:       {require: 'minerals',    enabled: true, max:250, stage: 0, checkForReset: true, triggerForReset: -1},
					hydroPlant:     {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'aqueduct', checkForReset: true, triggerForReset: -1},

					// other
					amphitheatre:   {require: 'minerals',    enabled: true, max:60, stage: 0, checkForReset: true, triggerForReset: -1},
					broadcastTower: {require: 'titanium',    enabled: true, max:-1, stage: 1, name: 'amphitheatre', checkForReset: true, triggerForReset: -1},
					tradepost:      {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					chapel:         {require: 'minerals',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					temple:         {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					mint:           {require: 'gold',        enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					// unicornPasture: {require: false,         enabled: true},
					ziggurat:       {require: false,         enabled: true, max:110, checkForReset: true, triggerForReset: -1},
					chronosphere:   {require: 'unobtainium', enabled: true, max:-1,  checkForReset: true, triggerForReset: -1},
					aiCore:         {require: false,         enabled: false,max:-1,  checkForReset: true, triggerForReset: -1},
					brewery:        {require: false,         enabled: true, max:-1,  checkForReset: true, triggerForReset: -1},


					// storage
					barn:           {require: 'wood',        enabled: true, max:15, checkForReset: true, triggerForReset: -1},
					harbor:         {require: false,         enabled: true, max:200,checkForReset: true, triggerForReset: -1},
					warehouse:      {require: false,         enabled: true, max:200,checkForReset: true, triggerForReset: -1},
					accelerator:    {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},

					// zebras
					zebraOutpost:   {require: 'bloodstone',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					zebraWorkshop:  {require: 'bloodstone',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					zebraForge:     {require: 'bloodstone',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1}
				}
			},
			space: {
				// Should space buildings be built automatically?
				enabled: false,
				// The functionality of the space section is identical to the build section. It just needs to be treated
				// seperately, because the game internals are slightly different.
				trigger: 0,
				items: {
					// Cath
					spaceElevator:  {require: 'unobtainium', enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					sattelite:      {require: 'titanium',    enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					spaceStation:   {require: 'oil',         enabled: false,max:-1, checkForReset: true, triggerForReset: -1},

					// Moon
					moonOutpost:    {require: 'uranium',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					moonBase:       {require: 'unobtainium', enabled: false,max:-1, checkForReset: true, triggerForReset: -1},

					// Dune
					planetCracker:  {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					hydrofracturer: {require: 'science',     enabled: true, max:-1, checkForReset: true, triggerForReset: -1},
					spiceRefinery:  {require: 'science',     enabled: false,max:-1, checkForReset: true, triggerForReset: -1},

					// Piscine
					researchVessel: {require: 'titanium',    enabled: true,  max:-1, checkForReset: true, triggerForReset: -1},
					orbitalArray:   {require: 'eludium',     enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Helios
					sunlifter:          {require: 'eludium', enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					containmentChamber: {require: 'science', enabled: false, max:5,  checkForReset: true, triggerForReset: -1},
					heatsink:           {require: 'thorium', enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					sunforge:           {require: false,     enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// T-Minus
					cryostation:    {require: 'eludium',     enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Kairo
					spaceBeacon:    {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Yarn
					terraformingStation: {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					hydroponics:         {require: 'kerosene',    enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Umbra
					hrHarvester:    {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Charon
					entangler:    {require: 'antimatter',  enabled: false, max:-1, checkForReset: true, triggerForReset: -1},

					// Centaurus
					tectonic:   {require: 'antimatter', enabled: false, max:-1, checkForReset: true, triggerForReset: -1},
					moltenCore: {require: 'uranium',    enabled: false, max:-1, checkForReset: true, triggerForReset: -1}
				}
			},
			time: {
				// Should time upgrades be built automatically?
				enabled: false,
				trigger: 0,
				items: {
					// Variants denote whether these buildings fall within the Chronoforge or Void categories.
					// Chronoforge has variant chrono.
					temporalBattery:     {require: false,          enabled: false, max:0,  variant: 'chrono', checkForReset: true, triggerForReset: -1},
					blastFurnace:        {require: false,          enabled: false, max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					timeBoiler:          {require: false,          enabled: false, max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					temporalAccelerator: {require: false,          enabled: false, max: 1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					temporalImpedance:   {require: false,          enabled: false, max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					ressourceRetrieval:  {require: false,          enabled: false, max:-1, variant: 'chrono', checkForReset: true, triggerForReset: -1},
					temporalPress:       {require: false,          enabled: false, max: 0, variant: 'chrono', checkForReset: true, triggerForReset: -1},

					// Void Space has variant void.
					cryochambers:        {require: false,          enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1},
					voidHoover:          {require: 'antimatter',   enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1},
					voidRift:            {require: false,          enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1},
					chronocontrol:       {require: 'temporalFlux', enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1},
					voidResonator:       {require: false,          enabled: false, max:-1, variant: 'void', checkForReset: true, triggerForReset: -1}
				}
			},
			timeCtrl: {
				enabled: false,
				items: {
					accelerateTime:     {enabled: true,  subTrigger: 1,     misc: true, label: i18n('option.accelerate')},
					timeSkip:           {enabled: true, subTrigger: 500,     misc: true, label: i18n('option.time.skip'), maximum: 1,
						0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true,
						spring: true, summer: false, autumn: false, winter: false,
						wait: false, adore: false, craft: false, moonMsg: -1},
					//reset:              {enabled: false, subTrigger: 99999, misc: true, label: i18n('option.time.reset')}
				}
			},
			craft: {
				// Should resources be crafted automatically?
				enabled: false,
				// Every item can define a required resource with the *require* property.
				// At what percentage of the storage capacity of that required resource should the listed resource be crafted?
				trigger: 0.95,
				// The items that can be crafted.
				// In addition to the *require* property, which is explained above, items can also define a *max*. If they
				// do, no more than that resource will be automatically produced. This feature can not be controlled through
				// the UI and is not used for any resource by default.
				// The *limited* property tells KS to craft resources whenever the ratio of the component cost of the stored resources
				// to the number of stored components is greater than the limit ratio "limRat".
				// This means that if limRat is 0.5, then if you have 1000 beams and 500 beams worth of scaffolds, 250 of the beams
				// will be crafted into scaffolds. If instead limRat is 0.75, 625 of the beams will be crafted into scaffolds for a final result
				// of 1125 beams-worth of scaffolds and 375 remaining beams.
				// Currently, limRat is not modifiable through the UI, though if there is demand, perhaps this will be added in the future.
				// Limited has a few other effects like balancing plates and steel while minimizing iron waste

				// TLDR: The purpose of the limited property is to proportionally distribute raw materials
				// across all crafted resources without wasting raw materials.

				items: {
					wood:       {require: 'catnip',      max: 0, limited: true,  limRat: 0.5, enabled: true},
					beam:       {require: 'wood',        max: 0, limited: true,  limRat: 0.5, enabled: true},
					slab:       {require: 'minerals',    max: 0, limited: true,  limRat: 0.5, enabled: true},
					steel:      {require: 'coal',        max: 0, limited: true,  limRat: 0.5, enabled: true},
					plate:      {require: 'iron',        max: 0, limited: true,  limRat: 0.5, enabled: true},
					alloy:      {require: 'titanium',    max: 0, limited: true,  limRat: 0.5, enabled: true},
					concrate:   {require: false,         max: 0, limited: true,  limRat: 0.2, enabled: true},
					gear:       {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					scaffold:   {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					ship:       {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					tanker:     {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: false},
					parchment:  {require: false,         max: 0, limited: false, limRat: 0.5, enabled: true},
					manuscript: {require: 'culture',     max: 0, limited: true,  limRat: 0.5, enabled: true},
					compedium:  {require: 'science',     max: 0, limited: true,  limRat: 0.5, enabled: true},
					blueprint:  {require: 'science',     max: 0, limited: true,  limRat: 0.5, enabled: true},
					kerosene:   {require: 'oil',         max: 0, limited: true,  limRat: 0.5, enabled: true},
					megalith:   {require: false,         max: 0, limited: true,  limRat: 0.5, enabled: true},
					eludium:    {require: 'unobtainium', max: 0, limited: false, limRat: 0.5, enabled: true},
					thorium:    {require: 'uranium',     max: 0, limited: false, limRat: 0.5, enabled: true}
				},
				autoConsume : {},
			},
			trade: {
				cache: false,
				// Should KS automatically trade?
				enabled: false,
				// Every trade can define a required resource with the *require* property.
				// At what percentage of the storage capacity of that required resource should the trade happen?
				trigger: 0.98,
				// Trades can be limited to only happen during specific seasons. This is because trades with certain races
				// are more effective during specific seasons.
				// The *allowCapped* property allows us to trade even if the sold resources are at their cap.
				items: {
					dragons:    {enabled: false,  require: 'titanium',    allowCapped: false,    limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true},

					zebras:     {enabled: true,   require: false,         allowCapped: false,    limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true},

					lizards:    {enabled: false,  require: 'minerals',    allowCapped: false,    limited: true,
						summer:  true,  autumn:  false, winter:  false,         spring:      false},

					sharks:     {enabled: false,  require: 'iron',        allowCapped: false,    limited: true,
						summer:  false, autumn:  false, winter:  true,          spring:      false},

					griffins:   {enabled: true,   require: 'wood',        allowCapped: false,    limited: true,
						summer:  false, autumn:  true,  winter:  false,         spring:      false},

					nagas:      {enabled: true,   require: false,         allowCapped: false,    limited: true,
						summer:  false, autumn:  false, winter:  false,         spring:      true},

					spiders:    {enabled: false,  require: false,         allowCapped: false,    limited: true,
						summer:  false, autumn:  true,  winter:  false,         spring:      false},

					leviathans: {enabled: true,   require: 'unobtainium', allowCapped: true,     limited: true,
						summer:  true,  autumn:  true,  winter:  true,          spring:      true}
				}
			},
			upgrade: {
				//Should KS automatically upgrade?
				enabled: false,
				items: {
					techs:     {enabled: true, limited: true},
					upgrades:  {enabled: true, limited: true, cache: false},
					policies:  {enabled: false},
					races:     {enabled: true},
					missions:  {enabled: true, subTrigger: 4},
					buildings: {enabled: true},
				}
			},
			options: {
				//猫薄荷日志
				catnipMsg: 0,
				//Which misc options should be enabled?
				enabled: true,
				items: {
					style:              {enabled: true,                    misc: true, label: i18n('option.style')},
					hunt:               {enabled: true,  subTrigger: 0.98, require: 'manpower', misc: true, label: i18n('option.hunt')},
					buildEmbassies:     {enabled: true,  subTrigger: 0.94, require: 'culture', misc: true, label: i18n('option.embassies')},
					shipOverride:       {enabled: true,  subTrigger: 170,  misc: true, label: i18n('option.shipOverride')},
					festival:           {enabled: true,                    misc: true, label: i18n('option.festival')},
					promote:            {enabled: true,                    misc: true, label: i18n('option.promote')},
					autofeed:           {enabled: true,                    misc: true, label: i18n('option.autofeed')},
					observe:            {enabled: true,                    misc: true, label: i18n('option.observe')},
					crypto:             {enabled: false, subTrigger: 1e4,  misc: true, label: i18n('option.crypto')},
					fixCry:             {enabled: false,                   misc: true, label: i18n('option.fix.cry')},
					//_steamworks:        {enabled: true,                   misc: true, label: i18n('option.steamworks')},
					saves:              {enabled: false,                   misc: true, label: '导出配置文件'},
					donate:             {enabled: false,                   misc: true, label: '显示捐赠原作者图标'},
					useWorkers:         {enabled: false,                   misc: true, label: i18n('option.useWorkers')},
					wiki:               {enabled: false,                   misc: true, label: '珂学家使用说明书（百科链接🐱）'},
					autoScientists:     {enabled: false,                   misc: true, label: '首次自启珂学家'},
				}
			},
			distribute: {
				religion: false,
				// Should KS automatically distribute free kittens
				enabled: false,
				items: {
					// dynamic priority. distribute to the job which have lowest (job.val / job.max) value.
					// if all jobs reach the max, then distribute kittens to unlimited job.
					woodcutter: {enabled: true, max: 29, limited: true},
					farmer:     {enabled: true, max: 1, limited: true},
					scholar:    {enabled: true, max: 9, limited: true},
					hunter:     {enabled: true, max: 24, limited: true},
					miner:      {enabled: true, max: 24, limited: true},
					priest:     {enabled: true, max: 3, limited: false},
					geologist:  {enabled: true, max: 40, limited: true},
					engineer:   {enabled: false, max: 1, limited: false},
					leader:     {enabled: true, leaderJob: 'farmer', leaderTrait: 'manager'},
				}

			},
			filter: {
				//What log messages should be filtered?
				enabled: true,
				items: {
					buildFilter:     {enabled: false, filter: true, label: i18n('filter.build'),      variant: "ks-activity type_ks-build"},
					researchFilter:  {enabled: false, filter: true, label: i18n('filter.research'),   variant: "ks-activity type_ks-research"},
					upgradeFilter:   {enabled: false, filter: true, label: i18n('filter.upgrade'),    variant: "ks-activity type_ks-upgrade"},
					craftFilter:     {enabled: false, filter: true, label: i18n('filter.craft'),      variant: "ks-activity type_ks-craft"},
					policyFilter:    {enabled: false, filter: true, label: i18n('filter.policy'),     variant: "ks-activity type_ks-policy"},
					upgBldFilter:    {enabled: false, filter: true, label: i18n('filter.upgBld'),     variant: "ks-activity type_ks-upgBld"},
					tradeFilter:     {enabled: false, filter: true, label: i18n('filter.trade'),      variant: "ks-activity type_ks-trade"},
					embassyFilter:   {enabled: false, filter: true, label: i18n('filter.embassy'),    variant: "ks-activity type_ks-embassy"},
					huntFilter:      {enabled: false, filter: true, label: i18n('filter.hunt'),       variant: "ks-activity type_ks-hunt"},
					praiseFilter:    {enabled: false, filter: true, label: i18n('filter.praise'),     variant: "ks-activity type_ks-praise"},
					adoreFilter:     {enabled: false, filter: true, label: i18n('filter.adore'),      variant: "ks-activity type_ks-adore"},
					transcendFilter: {enabled: false, filter: true, label: i18n('filter.transcend'),  variant: "ks-activity type_ks-transcend"},
					sacrificeFilter: {enabled: false, filter: true, label: i18n('filter.sacrifice'),  variant: "ks-activity type_ks-sacrifice"},
					faithFilter:     {enabled: false, filter: true, label: i18n('filter.faith'),      variant: "ks-activity type_ks-faith"},
					accelerateFilter:{enabled: false, filter: true, label: i18n('filter.accelerate'), variant: "ks-activity type_ks-accelerate"},
					timeSkipFilter:  {enabled: false, filter: true, label: i18n('filter.time.skip'),  variant: "ks-activity type_ks-timeSkip"},
					festivalFilter:  {enabled: false, filter: true, label: i18n('filter.festival'),   variant: "ks-activity type_ks-festival"},
					starFilter:      {enabled: false, filter: true, label: i18n('filter.star'),       variant: "ks-activity type_ks-star"},
					distributeFilter:{enabled: false, filter: true, label: i18n('filter.distribute'), variant: "ks-activity type_ks-distribute"},
					leaderFilter:    {enabled: false, filter: true, label: i18n('filter.leader'),     variant: "ks-activity type_ks-leader"},
					miscFilter:      {enabled: false, filter: true, label: i18n('filter.misc'),       variant: "ks-activity"}
				}
			},
			resources: {
				furs:        {enabled: true,  stock: 350, checkForReset: false, stockForReset: Infinity},
				timeCrystal: {enabled: false, stock: 0,    checkForReset: true,  stockForReset: 500000}
			},
			policies: [],
			cache: {
				dataTimer: {},
				cacheSum:  {},
				resources: {},
				trait:     {},
				upgrade:   undefined,
				science:   '',
				resUpg:    {},
			}
		}
	};

	// GameLog Modification
	// ====================

	// Increase messages displayed in log
	game.console.maxMessages = 1000;

	// 方便引用
	let resMap = game.resPool.resourceMap;

	const printoutput = function (args) {
		if (game.console.messages.length >= 999) {
			game.clearLog();
		}

		if (options.auto.filter.enabled) {
			for (const filt in options.auto.filter.items) {
				const filter = options.auto.filter.items[filt];
				if (filter.enabled && filter.variant === args[1]) {
					return;
				}
			}
		}
		const color = args.pop();
		args[1] = args[1] || 'ks-default';

		// update the color of the message immediately after adding
		const msg = game.msg.apply(game, args);
		$(msg.span).css('color', color);

		if (options.debug && console) {
			console.log(args);
		}
	};

	// Used for option change messages and other special notifications
	const message = function () {
		let args = Array.prototype.slice.call(arguments);
		args.push('ks-default');
		args.push(options.msgcolor);
		printoutput(args);
	};

	const activity = function () {
		let args = Array.prototype.slice.call(arguments);
		let activityClass = args.length > 1 ? ' type_' + args.pop() : '';
		args.push('ks-activity' + activityClass);
		args.push(options.activitycolor);
		printoutput(args);
	};

	const summary = function () {
		const args = Array.prototype.slice.call(arguments);
		args.push('ks-summary');
		args.push(options.summarycolor);
		printoutput(args);
	};

	const warning = function () {
		const args = Array.prototype.slice.call(arguments);
		args.unshift('Warning!');

		if (console) {
			console.log(args);
		}
	};

	// i18n support
	const imessage = function(key, args, t) { message(i18n(key, args), t); };
	const iactivity = function(key, args, t) { activity(i18n(key, args), t); };
	const isummary = function(key, args, t) { summary(i18n(key, args), t); };
	//var iwarning = function(key, args, t) { warning(i18n(key, args), t); };

	// 缓存upgrade
	const cacheUpgrades = (meta) => {
		if (!options.auto.cache.upgrade) {
			options.auto.cache.upgrade = {};
		}
		let metaUpgrades = meta.upgrades;
		for (let i in metaUpgrades) {
			if (!options.auto.cache.upgrade[i]) {
				options.auto.cache.upgrade[i] = [];
			}
			let upgrade = options.auto.cache.upgrade[i];
			for (let j in metaUpgrades[i]) {
				let metaUpgrade = metaUpgrades[i][j];
				if (upgrade.indexOf(metaUpgrade) === -1) {
					upgrade.push(metaUpgrade);
				}
			}
		}
	};

	// 资源百分比
	let resPercent = (name) => {
		let res = resMap[name];
		return res.value / res.maxValue;
	};

	// Core Engine for Kitten Scientists
	// =================================

	const Engine = function () {
		this.upgradeManager = new UpgradeManager();
		this.buildManager = new BuildManager();
		this.spaceManager = new SpaceManager();
		this.craftManager = new CraftManager();
		this.bulkManager = new BulkManager();
		this.tradeManager = new TradeManager();
		this.religionManager = new ReligionManager();
		this.timeManager = new TimeManager();
		this.villageManager = new TabManager('Village');
		this.cacheManager = new CacheManager();
	};

	Engine.prototype = {
		upgradeManager: undefined,
		buildManager: undefined,
		spaceManager: undefined,
		craftManager: undefined,
		bulkManager: undefined,
		tradeManager: undefined,
		religionManager: undefined,
		timeManager: undefined,
		villageManager: undefined,
		cacheManager: undefined,
		loop: undefined,
		huntID: undefined,
		renderID: undefined,
		worker: undefined,
		toolText: undefined,
		start: function (msg = true) {
			options.interval = Math.ceil (100 / game.getTicksPerSecondUI()) * 100;
			if (game.isWebWorkerSupported() && game.useWorkers && options.auto.options.items.useWorkers.enabled) {
				if (this.worker) {return;}
				const blob = new Blob([
					"onmessage = function(e) { setInterval(function(){postMessage('miaowu')}, '" + options.interval + "' ); }"
				]);
				const blobURL = window.URL.createObjectURL(blob);

				this.worker = new Worker(blobURL);
				this.worker.addEventListener('message', this.iterate.bind(this));
				this.worker.postMessage("miaowu");
				if(msg) {message('后台珂学家上钟了~ ＞▽＜');}
			} else {
				if (this.loop) {return;}
				this.loop = setInterval(this.iterate.bind(this), options.interval);
				if(msg) {imessage('status.ks.enable');}
			}
		},
		stop: function (msg = true) {
			if (game.isWebWorkerSupported() && this.worker) {
				if (msg) {message('后台珂学家爪巴了');}
				this.worker.terminate();
				this.worker = undefined;
			}

			if (!this.loop) {return;}
			clearInterval(this.loop);
			this.loop = undefined;
			if (msg) {imessage('status.ks.disable');}
		},
		iterate: async function () {
			clearTimeout(this.renderID);
			if (!game.mobileSaveOnPause || game.loadingSave || game.isPaused)               {return;}
			let refresh = 0;
			this.beforeStart();
			let auto = options.auto;
			let subOptions = auto.options;
			if (subOptions.enabled && subOptions.items.observe.enabled)                     {this.observeStars();}
			if (auto.upgrade.enabled)                                                       {refresh += ~~this.upgrade();}
			if (subOptions.enabled && subOptions.items.festival.enabled)                    {this.holdFestival();}
			if (auto.build.enabled)                                                         {refresh += ~~this.build();}
			if (auto.space.enabled)                                                         {refresh += ~~this.space();}
			if (auto.faith.enabled)                                                         {refresh += ~~this.worship();}
			if (auto.timeCtrl.enabled)                                                      {refresh += ~~this.timeCtrl();}
			if (refresh > 0 || auto.cache.upgrade)                                          {this.gameUpgrade();}
			if (auto.craft.enabled)                                                         {this.craft();}
			if (subOptions.enabled && subOptions.items.hunt.enabled)                        {this.delay();}
			if (subOptions.enabled && subOptions.items.autofeed.enabled)                    {this.autofeed();}
			if (auto.trade.enabled)                                                         {this.trade();}
			if (auto.time.enabled)                                                          {refresh += ~~this.chrono();}
			if (subOptions.enabled && subOptions.items.crypto.enabled)                      {this.crypto();}
			if (options.copyTrait)                                                          {this.setTrait();}
			if (subOptions.enabled && subOptions.items.promote.enabled)                     {this.promote();}
			if (subOptions.enabled)                                                         {refresh += ~~this.miscOptions();}
			if (auto.distribute.enabled)                                                    {refresh += ~~this.distribute();}
			if (refresh > 0)                                                                {this.delay('render');}
			//if (options.auto.timeCtrl.enabled && options.auto.timeCtrl.items.reset.enabled) {await this.reset();}
		},
		beforeStart: function () {
			let resPool = game.resPool;
			let resources = resPool.resources;
			for (let res of resources) {
				resPool.addRes(res, Math.max(res.perTickCached, 0), false);
			}
		},
		delay: function (render) {
			if (render) {
				let tooltip = dojo.byId('tooltip');
				let tool = tooltip.innerText;
				tooltip = null;
				if (options.renderTime + 6e5 < Date.now() || this.toolText !== tool) {
					this.renderID = setTimeout(() => {
						let active = game.ui.activeTabId;
						if (active === 'Village' || active === 'Nummon') {return;}
						options.renderTime = Date.now();
						this.toolText = tool;
						game.ui.render();
					}, Math.min(197, 197 - Date.now() + game.timer.timestampStart));
				}
			} else {
				this.huntID = setTimeout(() => {
					this.hunt();
				}, options.interval * 0.5);
			}
		},
		reset: async function () {
			/*
			// check challenge
			if (game.challenges.anyChallengeActive()) {return;}

			var checkedList = [];
			var checkList = [];
			var check = function (buttons) {
				if (checkList.length !== 0) {
					for (var i in buttons) {
						if (!buttons[i].model.metadata) {continue;}
						var name = buttons[i].model.metadata.name;
						var index = checkList.indexOf(name);
						if (index !== -1) {
							checkList.splice(index, 1);
							if (game.resPool.hasRes(buttons[i].model.prices)) {return true;}
						}
					}
				}
				return false;
			};

			// check building
			var opt = options.auto.build.items;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var bld = game.bld.get(name);
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}
			// unicornPasture
			opt = options.auto.unicorn.items.unicornPasture;
			if (opt.checkForReset) {
				var bld = game.bld.get('unicornPasture');
				checkedList.push({name: bld.label, trigger: opt.triggerForReset, val: bld.val});
				if (opt.triggerForReset > 0) {
					if (opt.triggerForReset > bld.val) {return;}
				} else {
					checkList.push('unicornPasture');
				}
			}
			if (check(this.buildManager.manager.tab.buttons) || checkList.length) {return;}

			// check space
			opt = options.auto.space.items;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var bld = game.space.getBuilding(name);
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}
			if (checkList.length != 0) {
				var panels = this.spaceManager.manager.tab.planetPanels;
				for (var i in panels) {
					for (var j in panels[i].children) {
						var model = panels[i].children[j].model;
						var name = model.metadata.name;
						var index = checkList.indexOf(name);
						if (index != -1) {
							checkList.splice(index, 1);
							if (game.resPool.hasRes(model.prices)) {this.return;}
						}
					}
				}
			}
			if (checkList.length) {return;}

			// check religion
			opt = options.auto.faith.items;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var bld = this.religionManager.getBuild(name, opt[name].variant);
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}
			opt = options.auto.unicorn.items;
			for (var name in opt) {
				if (opt[name].checkForReset && opt[name].variant == 'z') {
					var bld = this.religionManager.getBuild(name, 'z');
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}
			if (check(this.religionManager.manager.tab.zgUpgradeButtons) ||
				check(this.religionManager.manager.tab.rUpgradeButtons) ||
				check(this.religionManager.manager.tab.children[0].children[0].children) ||
				checkList.length) {return;}

			// check time
			opt = options.auto.time.items;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var bld = this.timeManager.getBuild(name, opt[name].variant);
					checkedList.push({name: bld.label, trigger: opt[name].triggerForReset, val: bld.val});
					if (opt[name].triggerForReset > 0) {
						if (opt[name].triggerForReset > bld.val) {return;}
					} else {
						checkList.push(name);
					}
				}
			}

			if (check(this.timeManager.manager.tab.children[2].children[0].children) ||
				check(this.timeManager.manager.tab.children[3].children[0].children) ||
				checkList.length) {return;}

			// check resources
			opt = options.auto.resources;
			for (var name in opt) {
				if (opt[name].checkForReset) {
					var res = game.resPool.get(name);
					checkedList.push({name: res.title, trigger: opt[name].stockForReset, val: res.value});
					if (opt[name].stockForReset > res.value) {return;}
				}
			}

			// stop!
			this.stop(false);

			var sleep = function (time = 1500) {
				return new Promise(resolve => {
					if (!(options.auto.engine.enabled && options.auto.timeCtrl.enabled && options.auto.timeCtrl.items.reset.enabled)) {throw 'canceled by player';}
					setTimeout(resolve, time);
				});
			};

			try {
				for (var i in checkedList) {
					await sleep(500);
					var checked = checkedList[i];
					imessage('reset.check', [checked.name, game.getDisplayValueExt(checked.trigger), game.getDisplayValueExt(checked.val)]);
				}

				await sleep(0).then(() => {
					imessage('reset.checked');
					return sleep();
				}).then(() => {
					iactivity('reset.tip');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.10');
					return sleep(2000);
				}).then(() => {
					imessage('reset.countdown.9');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.8');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.7');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.6');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.5');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.4');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.3');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.2');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.1');
					return sleep();
				}).then(() => {
					imessage('reset.countdown.0');
					return sleep();
				}).then(() => {
					iactivity('reset.last.message');
					return sleep();
				});
			} catch (error) {
				imessage('reset.cancel.message');
				iactivity('reset.cancel.activity');
				return;
			}

			var kittenStorage;
			if (typeof kittenStorage.reset === 'undefined') {kittenStorage.reset = {};}

			kittenStorage.reset.karmaLastTime = game.resPool.get('karma').value;
			kittenStorage.reset.paragonLastTime = game.resPool.get('paragon').value;
			kittenStorage.reset.times += 1;
			kittenStorage.reset.reset = true;
			saveToKittenStorage();

			//=============================================================
			for (var i = 0; i < game.challenges.challenges.length; i++){
				game.challenges.challenges[i].pending = false;
			}
			game.resetAutomatic();
			//=============================================================
			*/
		},
		timeCtrl: function () {
			const optionVals = options.auto.timeCtrl.items;
			let refreshRequired = 0;

			// Tempus Fugit
			if (optionVals.accelerateTime.enabled && game.science.get("calendar").researched) {
				const tf = game.resPool.get('temporalFlux');
				if (tf.value >= Math.max(tf.maxValue * optionVals.accelerateTime.subTrigger, 1) && !game.time.isAccelerated) {
					game.time.isAccelerated = true;
					iactivity('act.accelerate', [], 'ks-accelerate');
					storeForSummary('accelerate', 1);
				}
				if (options.interval !== Math.ceil (100 / game.getTicksPerSecondUI()) * 100) {
					engine.stop(false);
					if (options.auto.engine.enabled) {
						if (options.interval === 2000) {
							iactivity('act.accelerate.acl');
						} else {
							iactivity('act.accelerate.slow');
						}
						engine.start(false);
					}
				}
			}

			// Combust time crystal
			TimeSkip:
			if (optionVals.timeSkip.enabled && game.workshop.get('chronoforge').researched) {
				let timeCrystalValue = resMap['timeCrystal'].value;
				let timeSkipMaximum = optionVals.timeSkip.maximum;
				if (!timeSkipMaximum) {return 0;}
				let factor = game.challenges.getChallenge("1000Years").researched ? 5 : 10;
				timeSkipMaximum = Math.ceil(Math.max(50 / factor * game.getEffect('heatPerTick') / game.getTicksPerSecondUI() , timeSkipMaximum));
				const subTrigger = optionVals.timeSkip.subTrigger;
				let cost = Math.max(subTrigger, this.craftManager.getStock('timeCrystal'), timeSkipMaximum);

				const currentCycle = game.calendar.cycle;
				const currentYear = game.calendar.year;
				const currentDay = game.calendar.day;

				const heatMax = game.getEffect('heatMax');
				let heatNow = game.time.heat;
				if (timeCrystalValue < cost || currentDay < 0 || !optionVals.timeSkip[currentCycle] || heatNow >= heatMax) {
					break TimeSkip;
				}

				// 红月判断收支平衡
				let prestige = game.prestige.getPerk("numerology").researched;
				if (currentCycle === 5 && optionVals.timeSkip[currentCycle] && prestige && game["nummon"]){
					// 概览 算好的当前周期收入
					let unobtainiumTick = game["nummon"]['getTradeTC']();
					let cycleFestival = game.calendar.cycleEffectsFestival({
						unobtainium: 1
					})['unobtainium'];
					let cycleEffects = game.calendar.cycleEffectsBasics({
						unobtainiumPerTickSpace: 1
					}, "moonOutpost")['unobtainiumPerTickSpace'];
					// 平衡周期
					let calendar = (56.5 + 12 * game.getEffect("festivalRatio")) / 50 ;
					let cycleYear = game.calendar.cycleYear;
					let tradeVal = unobtainiumTick * calendar / (cycleFestival * cycleEffects);
					if (tradeVal < 1 || game.getEffect('heatPerTick') < 0.02) {
						if (cycleYear !== optionVals.timeSkip.moonMsg) {
							optionVals.timeSkip.moonMsg = cycleYear;
							iactivity('summary.time.skip.moon', [1]);
							storeForSummary('time.skip.moon', 1);
						}
						break TimeSkip;
					}
				}

				let shatter = game["timeTab"].cfPanel.children[0].children[0]; // check?
				if (!shatter.model.enabled) {
					return shatter.controller.updateEnabled(shatter.model);
				}

				let season = game.calendar.season;
				let wait = optionVals.timeSkip.wait;
				if (!optionVals.timeSkip[game.calendar.seasons[season].name] || (wait !== false && currentCycle === 5)) {
					if (wait === 1 && currentCycle === 5) {
						optionVals.timeSkip.wait = game.calendar.year;
						break TimeSkip;
					} else if (wait === false || wait === currentYear || wait === 1) {
						break TimeSkip;
					} else if (wait !== currentYear) {
						optionVals.timeSkip.wait = false;
					}
				}

				let heatMin =  4 * timeSkipMaximum * factor;
				let booleanForHeat = (game.time.heat > game.getEffect('heatMax') - Math.min(heatMin, 20 * game.time.getCFU("blastFurnace").on + 20));
				let moonBoolean = optionVals.timeSkip[5];
				if (moonBoolean && prestige && optionVals.timeSkip.wait === false && booleanForHeat) {
					optionVals.timeSkip.wait = 1;
					iactivity('summary.moon', [1]);
					storeForSummary('moon', 1);
				}

				let yearsPerCycle = game.calendar.yearsPerCycle;
				let remainingYearsCurrentCycle = yearsPerCycle - game.calendar.cycleYear;
				let cyclesPerEra = game.calendar.cyclesPerEra;
				let canSkip = Math.min(Math.floor((heatMax - heatNow) / factor), timeSkipMaximum);
				let willSkip = 0;
				if (canSkip < remainingYearsCurrentCycle){
					willSkip = canSkip;
				} else {
					willSkip += remainingYearsCurrentCycle;
					canSkip -= remainingYearsCurrentCycle;
					let skipCycles = 1;
					while (canSkip > yearsPerCycle && optionVals.timeSkip[(currentCycle + skipCycles) % cyclesPerEra]) {
						willSkip += yearsPerCycle;
						canSkip -= yearsPerCycle;
						skipCycles += 1;
					}
					if (optionVals.timeSkip[(currentCycle + skipCycles) % cyclesPerEra] && canSkip > 0) {willSkip += canSkip;}
				}
				if (willSkip > 0) {
					willSkip = Math.min(willSkip, Math.max(500 , game.getEffect("temporalPressCap") * 25));

					if (game.time.getCFU("ressourceRetrieval").val) {
						optionVals.timeSkip.adore = true;
						options.auto.options.items.hunt.time = true;
						this.skipCtrlRes();
					}

					let beforeSkipYear = game.calendar.year;
					shatter.controller.doShatterAmt(shatter.model, willSkip);
					willSkip = game.calendar.year - beforeSkipYear;
					if (!willSkip) {return;}
					refreshRequired = -100;
					iactivity('act.time.skip', [willSkip], 'ks-timeSkip');
					storeForSummary('time.skip', willSkip);
				}
			}

			return refreshRequired;
		},
		promote: function () {
			let leader = game.village.leader;
			if (game.science.get('civil').researched && leader) {
				let optionDistribute = options.auto.distribute;
				let optionLeader = optionDistribute.items.leader;

				let rank = leader.rank;
				let gold = this.craftManager.getValueAvailable('gold', true);

				// game.village.sim.goldToPromote will check gold
				// game.village.sim.promote check both gold and exp
				if (game.village.sim.goldToPromote(rank, rank + 1, gold)[0] && game.village.sim.promote(leader, rank + 1) === 1) {
					let census = game['villageTab'].censusPanel.census;
					iactivity('act.promote', [rank + 1], 'ks-leader');
					census.renderGovernment(census.container);
					census.update();
					storeForSummary('promote', 1);
				}
			}
		},
		distribute: function () {
			const distributeItem = options.auto.distribute.items;
			let leaderVals = distributeItem.leader;
			let refreshRequired = 0;
			let village = game.village;
			if (leaderVals.enabled && game.science.get('civil').researched && !game.challenges.isActive("anarchy") && !options.copyTrait) {
				let traitName = leaderVals.leaderTrait;
				let vitruvianFeline = game.prestige.getPerk('vitruvianFeline').researched;
				let leaderJobName = leaderVals.leaderJob;
				leaderJobName = (leaderJobName === 'farmer' && vitruvianFeline && traitName === 'manager' && !game.challenges.isActive("atheism")) ? 'priest' : leaderJobName;
				if (village.leader === null && village.sim.kittens.length) {
					game["villageTab"].censusPanel.census.makeLeader(village.sim.kittens[0]);
				}
				let optionsTheocracy = false;
				if (options.auto.upgrade.items.policies.enabled) {
					optionsTheocracy = (options.policies ===  undefined) ? false : options.policies.some(obj => obj === 'theocracy');
				}
				if (optionsTheocracy || game.science.getPolicy('theocracy').researched) {leaderJobName = "priest";}
				let distributeJob = village.getJob(leaderJobName);
				if (village.leader == null || !(village.leader.job === leaderJobName && village.leader.trait.name === traitName)) {
					let traitKittens = village.sim.kittens.filter(kitten => kitten.trait.name === traitName);
					if (traitKittens.length !== 0) {
						if (distributeJob.unlocked && distributeJob.value < village.getJobLimit(leaderJobName)) {
							let correctLeaderKitten = traitKittens.sort(function(a, b) {return b.rank - a.rank === 0 ? b.exp - a.exp : b.rank - a.rank;})[0];
							if (distributeJob.value >= distributeItem[leaderJobName].max && distributeItem[leaderJobName].limited && distributeJob.value) {
								village.sim.removeJob(leaderJobName, 1);
							}
							village.unassignJob(correctLeaderKitten);
							correctLeaderKitten.job = leaderJobName;
							village.getJob(leaderJobName).value++;
							game["villageTab"].censusPanel.census.makeLeader(correctLeaderKitten);
							refreshRequired += 1;
							iactivity('act.distributeLeader', [i18n('$village.trait.' + traitName)], 'ks-distribute');
							storeForSummary('distribute', 1);
						}
					}
				}
			}

			let minerItem = options.auto.distribute.items.miner;
			let agriculture = game.science.get("agriculture").researched;
			let happiness = village.happiness;
			let normalWinterCatnip = (this.craftManager.getPotentialCatnip(false) <= 0.85 * happiness || (village.jobs[1].value === 0 && distributeItem['farmer'].enabled));
			let freeKittens = village.getFreeKittens();
			let miner = village.jobs[4];
			let religionCatnip = options.auto.distribute;
			if (!freeKittens) {
				let woodcutter = village.getJob('woodcutter').value;
				if (minerItem.enabled && miner.unlocked && !miner.value && woodcutter > 1 && village.sim.kittens.length) {village.sim.removeJob('woodcutter');}
				if (religionCatnip.religion && woodcutter > 2) {
					village.sim.removeJob('woodcutter');
				} else {
					return refreshRequired;
				}
			}

			let resCatnip = resMap["catnip"];
			let resKitten = resMap["kittens"];
			let catnipValue = (resCatnip.value - (1800 * happiness * resKitten.value) < 0 || resKitten.maxValue - resKitten.value === 1 || freeKittens > 1);
			if (religionCatnip.religion || (normalWinterCatnip && agriculture && catnipValue && resCatnip.value <= resCatnip.maxValue)) {
				religionCatnip.religion = false;
				village.assignJob(village.getJob("farmer"), 1);
				iactivity('act.distribute.catnip', [], 'ks-distribute');
				iactivity('act.distribute', [i18n('$village.job.' + "farmer")], 'ks-distribute');
				storeForSummary('catnip', 1);
				return refreshRequired;
			}

			let jobName = '';
			let minRatio = Infinity;
			let currentRatio = 0;
			let revolution = game.religion.getSolarRevolutionRatio();
			let expect = options.auto.faith.addition.autoPraise.expect;
			expect = expect && expect > 5 && revolution < expect * 0.4 && village.jobs[5].unlocked;
			for (let i = village.jobs.length - 1; i >= 0; i--) {
				let job = village.jobs[i];
				let unlocked = job.unlocked;
				if (!unlocked) {continue;}

				let name = job.name;
				let jobItem = distributeItem[name];
				if (!jobItem.enabled) {continue;}

				let maxGame = village.getJobLimit(name);
				let val = job.value;
				if (val >= maxGame) {continue;}

				let maxKS = Math.max(0, jobItem.max);
				let limited = jobItem.limited;
				if (name === 'hunter') {
					let manpowerJobRatio = game.getEffect('manpowerJobRatio');
					if (manpowerJobRatio < 0.5) {
						maxKS = (village.maxKittens > 10) ? 2 : 0;
					} else if ((manpowerJobRatio <= 0.75 && !game.science.get('navigation').researched) || expect) {
						maxKS = Math.round(maxKS * 0.42);
						if (!expect) {msgSummary('hunter');}
					} else {
						msgSummary('hunter', true);
					}
				}
				if (name === 'geologist') {
					if (!game.workshop.get("geodesy").researched && resMap['iron'].perTickCached < 50) {maxKS = Math.round(maxKS * 0.5);}
					if (!game.science.get('mechanization').unlocked && !game.workshop.get("geodesy").researched) {maxKS = 1;}
				}
				if (name === 'scholar' && !game.getEffect('shatterTCGain') && game.workshop.get('spaceManufacturing').researched && limited) {maxKS = Math.max(maxKS, 18);}
				if (name === 'miner' && !game.science.get('writing').researched) {maxKS = Math.round(maxKS * 0.3);}
				if (!limited || val < maxKS) {
					currentRatio = val / maxKS;
					if (currentRatio < minRatio) {
						minRatio = currentRatio;
						jobName = name;
					}
				}
			}
			if (jobName) {
				village.assignJob(village.getJob(jobName), 1);
				refreshRequired = 1;
				iactivity('act.distribute', [i18n('$village.job.' + jobName)], 'ks-distribute');
				storeForSummary('distribute', 1);
			}
			if (refreshRequired) {
				game["villageTab"].updateTab();
				village.updateResourceProduction();
				return 1;
			}
		},
		autofeed: function () {
			const levi = game.diplomacy.get("leviathans");
			const nCorn = game.resPool.get("necrocorn");
			if (!(levi.unlocked && nCorn.value > 0)) {return;}
			if (levi.energy === game.diplomacy.getMarkerCap()) {return;}
			if (nCorn.value >= 1) {
				game.diplomacy.feedElders();
				iactivity('act.feed', [] , 'ks-sacrifice');
				storeForSummary('feed', 1);
			} else if (0.25 * (1 + game.getEffect("corruptionBoostRatio")) < 1) {
				storeForSummary('feed', nCorn.value);
				game.diplomacy.feedElders();
				iactivity('dispose.necrocorn');
			}
		},
		crypto: function () {
			let coinPrice = game.calendar.cryptoPrice;
			let previousRelic = game.resPool.get('relic').value;
			let previousCoin = game.resPool.get('blackcoin').value;
			if ((!game.science.get("blackchain").researched && !previousCoin > 0) || !game.diplomacy.get("leviathans").unlocked) {return;}
			let crypto = options.auto.options.items.crypto;
			let subTrigger = (crypto.subTrigger == null) ? "10000-860-1060" : options.auto.options.items.crypto.subTrigger.toString().split('-');
			//var isNumber = /^\d+(\.\d+)?$/;

			let relicTrigger = parseFloat(subTrigger[0]);
			let minCoinPrice = parseFloat(subTrigger[1]);
			let maxCoinPrice = parseFloat(subTrigger[2]);

			if (subTrigger.length !== 3 || !relicTrigger || !minCoinPrice || !maxCoinPrice) {
				if (!relicTrigger) {
					relicTrigger = 10000;
				}
				options.auto.options.items.crypto.subTrigger = relicTrigger + "-881-1060";
				//kittenStorage.items['set-crypto-subTrigger'] = JSON.stringify(relic + "-881-1060");
				//$("#set-crypto-subTrigger")[0].title = relic;
				return saveToKittenStorage();
			}

			// Exchanges up to a certain threshold, in order to keep a good exchange rate, then waits for a higher treshold before exchanging for relics.
			if (coinPrice < minCoinPrice && previousRelic > relicTrigger) {
				game.diplomacy.buyBcoin();

				let currentCoin = game.resPool.get('blackcoin').value;
				let exchangedCoin = game.getDisplayValueExt(currentCoin - previousCoin);
				iactivity('blackcoin.buy', [exchangedCoin, game.getDisplayValueExt(previousRelic)], 'ks-trade');
				storeForSummary('blackcoin.buy', 1);
			} else if (coinPrice > maxCoinPrice && game.resPool.get('blackcoin').value > 0) {
				game.diplomacy.sellBcoin();

				let currentRelic = game.resPool.get('relic').value;
				let exchangedRelic = game.getDisplayValueExt(currentRelic - previousRelic);

				iactivity('blackcoin.sell', [exchangedRelic, game.getDisplayValueExt(previousCoin)], 'ks-trade');
				storeForSummary('blackcoin.sell', 1);
			}
		},
		worship: function () {
			const builds = options.auto.faith.items;
			const buildManager = this.buildManager;
			const craftManager = this.craftManager;
			const option = options.auto.faith.addition;
			let refreshRequired = 0;
			let noPastureCopy, i;
			let voidOrder = game.prestige.getPerk("voidOrder").researched;

			if (option.bestUnicornBuilding.enabled) {
				let btn = this.getBestUnicornBuilding();
				let zigguratOn = game.bld.get('ziggurat').on;
				let tears = resMap['tears'].value;
				let unicorns = resMap['unicorns'].value;
				if (btn) {
					let oneTear = !tears && unicorns >= 1000 && zigguratOn;
					let buttonPrices;
					if (btn.name === "unicornPasture" && !oneTear) {
						if (unicorns >= Math.pow(btn.priceRatio + game.getEffect("priceRatio"), btn.val) * 2) {buildManager.build(btn.name, undefined, 1);}
					} else {
						let tearNeed;
						let btnButton = 0;
						if (oneTear) {
							tearNeed = 0.99;
						} else {
							buttonPrices = dojo.clone(btn.prices);
							for (i = 0; i < buttonPrices.length; i++) {
								buttonPrices[i].val *= Math.pow(1.15, btn.on);
								if (buttonPrices[i].name === 'tears') {tearNeed = buttonPrices[i].val + craftManager.getStock('tears');}
								if (buttonPrices[i].name === 'gold')  {buttonPrices[i].val *= 1 - game.getEffect('goldCostReduction');}
							}
							btnButton = religionManager.getBuildButton(btn.name, 'z');
						}
						let tearHave = tears - craftManager.getStock('tears');
						if (tearNeed + 0.01 > tearHave) {
							// if no ziggurat, getBestUnicornBuilding will return unicornPasture
							let maxSacrifice = Math.floor((unicorns - craftManager.getStock('unicorns')) / 2500);
							let needSacrifice = Math.ceil((tearNeed - tearHave) / zigguratOn);
							if (needSacrifice <= maxSacrifice) {
								let sacrificeBtn = game["religionTab"].sacrificeBtn;
								if (!sacrificeBtn || !sacrificeBtn.model) {
									return game["religionTab"].render();
								}
								let unicornTotal = sacrificeBtn.model.prices[0].val * needSacrifice;
								if (unicorns > unicornTotal) {
									let gainCount = zigguratOn * needSacrifice;
									let sacrificeController = sacrificeBtn.controller.controllerOpts;
									game.resPool.addResEvent(sacrificeBtn.model.prices[0].name, -unicornTotal);
									game.resPool.addResEvent(sacrificeController.gainedResource, gainCount);
									game.stats.getStat("unicornsSacrificed").val += unicornTotal;
									let displayNumber = [game.getDisplayValueExt(unicornTotal), game.getDisplayValueExt(gainCount)];
									game.msg($I(sacrificeController.logTextID, displayNumber), "notice", sacrificeController.logfilterID);
									activity(i18n('unicornSacrifice', displayNumber), 'ks-sacrifice');
								}
								//game.religionTab.sacrificeBtn.controller._transform(game.religionTab.sacrificeBtn.model, needSacrifice);
							}
						}
						// && resMap['tears'].value >= tearNeed
						if (btnButton === undefined && zigguratOn) {
							this.religionManager.manager.render();
						} else if (!oneTear && game.resPool.hasRes(buttonPrices)) {
							religionManager.build(btn.name, 'z', 1);
							refreshRequired = 1;
						}
					}
				}
			} else {
				if (resMap['alicorn'].value < 50 || option.bestUnicornBuilding.confirm < 3) {
					$('#toggle-bestUnicornBuilding').click();
					option.bestUnicornBuilding.confirm += 1;
				}
				//builds = Object.assign({}, builds, Object.fromEntries(Object.entries(options.auto.unicorn.items).filter(([k,v]) => v.variant != 'zp')));
				if (options.auto.unicorn.items.unicornPasture.enabled) {
					this.build({unicornPasture: {require: false, enabled: true}});
				}
				noPastureCopy = JSON.parse(JSON.stringify(options.auto.unicorn.items));
				noPastureCopy = Object.assign(noPastureCopy, options.auto.faith.items);
				delete noPastureCopy.unicornPasture;
			}
			// religion build
			refreshRequired += this._worship(noPastureCopy || builds);

			let resourceFaith = craftManager.getResource('faith');
			let rate = resPercent('faith');
			let transcendenceMeta = game.religion.getRU("transcendence");
			let transcendenceReached = transcendenceMeta.on;
			let transcendenceTier = game.religion.transcendenceTier;
			let tt = transcendenceReached ? transcendenceTier : 0;

			// After Adore epiphany
			let worship = game.religion.faith;
			let epiphany = game.religion.faithRatio;
			let solarRatio = game.religion.getSolarRevolutionRatio();
			let solarRLimit = game.getEffect("solarRevolutionLimit");
			let maxSolarRevolution = 10 + solarRLimit;
			let adoreTrigger = option.adore.subTrigger;
			let triggerSolarRevolution = maxSolarRevolution * adoreTrigger;
			let epiphanyInc = worship / 1000000 * (tt + 1) * (tt + 1) * 1.01;
			let epiphanyAfterAdore = epiphany + epiphanyInc;
			let worshipAfterAdore = 0.01 + resourceFaith.value * (1 + game.getUnlimitedDR(epiphanyAfterAdore, 0.1) * 0.1);
			let solarRevolutionAdterAdore = game.getLimitedDR(game.getUnlimitedDR(worshipAfterAdore, 1000) / 100, maxSolarRevolution);

			// boolean
			let forceStep = false;
			let autoPraiseEnabled = option.autoPraise.enabled;
			let autoAdoreEnabled = option.adore.enabled;
			let timeSkipAdore = options.auto.timeCtrl.items.timeSkip.adore;
			let doAdoreAfterTimeSkip = (timeSkipAdore && autoPraiseEnabled && autoAdoreEnabled);
			let PraiseSubTrigger = option.autoPraise.subTrigger;

			let moonBoolean = game.space.getBuilding('moonOutpost').val;
			let booleanForAdore = moonBoolean && worship >= 1e5;
			let apocripha = game.religion.getRU('apocripha').on;
			booleanForAdore = booleanForAdore && apocripha && tt && autoAdoreEnabled;
			if (moonBoolean && worship >= 1e5 && booleanForAdore && PraiseSubTrigger < 0.98 && PraiseSubTrigger) {option.autoPraise.subTrigger = 0.98;}

			// enough faith, and then TAP
			if (Math.min(0.999, Math.max(0.98, PraiseSubTrigger)) <= rate || doAdoreAfterTimeSkip) {
				// Transcend
				if (option.transcend.enabled && transcendenceReached) {
					let TranscendTimes;
					let nextLevelCatnip = game.religion._getTranscendTotalPrice(tt + 1) - game.religion._getTranscendTotalPrice(tt);
					if (tt > 10) {
						TranscendTimes = 1;
					} else if (tt < 11 && moonBoolean && worship > 1e5 && apocripha && this.catnipForReligion(nextLevelCatnip) > 0) {
						TranscendTimes = 4;
					} else {
						TranscendTimes = 0;
					}

					while (TranscendTimes) {
						epiphany = game.religion.faithRatio;
						tt = game.religion.transcendenceTier;

						// Epiphany Recommend
						let adoreIncreaseRatio = Math.pow((tt + 2) / (tt + 1), 2);
						let needNextLevel = game.religion._getTranscendTotalPrice(tt + 1) - game.religion._getTranscendTotalPrice(tt);
						let x = needNextLevel;
						let blackObelisk = game.religion.getTU("blackObelisk").val;
						let obeliskRatio = ((tt + 1) * 5 * blackObelisk + 1000) / (tt * 5 * blackObelisk + 1000);
						let k = adoreIncreaseRatio * obeliskRatio;
						let epiphanyRecommend = (1 - k + Math.sqrt(80 * (k * k - 1) * x + (k - 1) * (k - 1))) * k / (40 * (k + 1) * (k + 1) * (k - 1)) + x + x / (k * k - 1);

						// Transcend Condition
						let booleanEpiphany = (epiphany > epiphanyRecommend && worship > Math.min((tt - 3) * 1e6, 0) + 1e6);
						let afterAdoreMoreEpiphany = (worship * 2.02 * tt + 3.03 * worship > 1e6 * needNextLevel && epiphany > needNextLevel);
						if (booleanEpiphany || afterAdoreMoreEpiphany) {
							// code copy from kittens game's religion.js: game.religion.transcend()
							// game.religion.transcend() need confirm by player
							// game version: 1.4.8.1
							// ========================================================================================================
							// DO TRANSCEND START
							// ========================================================================================================
							game.religion.faithRatio -= needNextLevel;
							game.religion.tcratio += needNextLevel;
							game.religion.transcendenceTier += 1;
							let atheism = game.challenges.getChallenge("atheism");
							atheism.calculateEffects(atheism, game);
							blackObelisk = game.religion.getTU("blackObelisk");
							blackObelisk.calculateEffects(blackObelisk, game);
							game.msg($I("religion.transcend.msg.success", [game.religion.transcendenceTier]));
							// ========================================================================================================
							// DO TRANSCEND END
							// ========================================================================================================
							tt = game.religion.transcendenceTier;
							if (tt < 8) {
								forceStep = true;
							}
							for (let i = 0; i < game.religion.transcendenceUpgrades.length; i++) {
								let upgrade = game.religion.transcendenceUpgrades[i];
								if (!upgrade.unlocked && tt >= upgrade.tier && upgrade.name !== 'mausoleum') {
									upgrade.unlocked = true;
									refreshRequired = 1;
								}
							}
							TranscendTimes--;
							iactivity('act.transcend', [game.getDisplayValueExt(needNextLevel), tt], 'ks-transcend');
							storeForSummary('transcend', 1);
						} else {
							TranscendTimes = 0;
						}
					}
				}

				// 打开超越按钮
				let transcendStorage = (game.resPool.isStorageLimited(transcendenceMeta.prices));
				let transcendenceOption = options.auto.faith.items.transcendence;
				if (!transcendenceOption.enabled && worship > transcendenceMeta.faith && autoAdoreEnabled && transcendStorage) {
					transcendenceOption.enabled = true;
					printoutput(['小猫贴心得无视超越按钮禁用','ks-default', options.activitycolor]);
				}

				// Adore
				let adoreFactor = (!game.religion.faithRatio || tt);
				let catnipAdore = transcendenceTier > 9 || this.catnipForReligion() > 0;
				// 期望太阳革命加成赞美群星
				let transformTier = 0.5 * Math.log(game.religion.faithRatio) + 3.45;
				let rrVal = game.time.getCFU("ressourceRetrieval").val;
				let factor = (adoreFactor < 10 || rrVal) ? 1.65 + 2 * Math.log1p(solarRLimit) : 1.3;
				let expectSolarRevolutionRatio = game.getLimitedDR(factor * Math.pow(Math.E, 0.65 * transformTier) , 100 * maxSolarRevolution);
				let adoreTri = option.adore.subTrigger;
				let expect = solarRatio * 1e2 < expectSolarRevolutionRatio;
				if (adoreTri === 0.001 && booleanForAdore && expect && tt && catnipAdore) {
					if (solarRevolutionAdterAdore <= Math.max(1, solarRatio - 0.5)) {booleanForAdore = false;}
					expectSolarRevolutionRatio = Math.floor(expectSolarRevolutionRatio * 1e2) / 100;
					let filter = !rrVal || !voidOrder;
					if (expectSolarRevolutionRatio !== activitySummary.other['adore.solar'] && filter) {
						activity(i18n('summary.adore.solar', [expectSolarRevolutionRatio]));
						activitySummary.other['adore.solar'] = expectSolarRevolutionRatio;
					}
				}
				if (booleanForAdore && adoreTri !== 0.001) {
					booleanForAdore = adoreTri * 10 < solarRevolutionAdterAdore;
				}
				if (booleanForAdore || forceStep) {
					if (doAdoreAfterTimeSkip) {
						options.auto.timeCtrl.items.timeSkip.adore = false;
						forceStep = true;
					}
					game.religion._resetFaithInternal(1.01);
					iactivity('act.adore', [game.getDisplayValueExt(worship), game.getDisplayValueExt(epiphanyInc)], 'ks-adore');
					storeForSummary('adore', epiphanyInc);
				}
			}

			// 太阳革命加速恢复到期望值
			let transformTier = 0.525 * Math.log(game.religion.faithRatio) + 3.45;
			let factor = (voidOrder) ? 1 : 0.3;
			factor = factor * (game.prestige.getPerk('vitruvianFeline').researched) ? 1 : 0.5;
			factor = (game.workshop.get('spaceManufacturing').researched) ? 5 : factor;
			let expectSolarRevolutionRatio = game.getLimitedDR(0.3 * Math.pow(Math.E, 0.65 * transformTier) * factor, 80 * maxSolarRevolution);
			option.autoPraise.expect = expectSolarRevolutionRatio * 0.01;
			let solarRevolution = game.religion.getRU('solarRevolution').on;
			if (solarRevolution && PraiseSubTrigger === 0.98 && solarRatio < expectSolarRevolutionRatio * 0.01) {
				PraiseSubTrigger = 0;
			}

			// 无盛典点出阳光赞歌
			let fR =  (1 + game.getUnlimitedDR(epiphany, 0.1) * 0.1);
			let sun = (resourceFaith.value > (1000 - worship) / fR && worship < 1000 && !voidOrder);
			sun = sun || (resourceFaith.value > (150 - worship) / fR && worship < 150 && !voidOrder);
			// Praise
			let fistReset = (rate < 0.98 || !voidOrder || solarRevolution);
			let booleanForPraise = (autoPraiseEnabled && rate >= PraiseSubTrigger && resourceFaith.value > 0.001 && fistReset);
			if (booleanForPraise || forceStep || sun) {
				if (option.autoPraise.subTrigger === 0.98 && !forceStep && rate < 0.98 && Date.now() > option.autoPraise.time + 2e5 && !timeSkipAdore) {
					option.autoPraise.time = Date.now();
					let expectSolar = game.getDisplayValueExt(expectSolarRevolutionRatio);
					activity(i18n('summary.praise.msg', [expectSolar]));
					activitySummary.other['praise.msg'] = expectSolar;
				}
				let apocryphaBonus = game.religion.getApocryphaBonus();
				let worshipInc = resourceFaith.value * (1 + apocryphaBonus);
				storeForSummary('praise', worshipInc);
				iactivity('act.praise', [game.getDisplayValueExt(resourceFaith.value), game.getDisplayValueExt(worshipInc)], 'ks-praise');
				game.religion.praise();
				let faithMap = resMap['faith'];
				faithMap.value = Math.max(Math.min(resMap['faith'].maxValue, faithMap.value + 2 * resMap['faith'].perTickCached), 0);
			}
			return refreshRequired;
		},
		_worship: function (builds) {
			let copyBuilds = JSON.parse(JSON.stringify(builds || options.auto.faith.items));
			let buildManager = this.religionManager;
			let bulkManager = this.bulkManager;
			let gReligion = game.religion;

			this.setTrait('wise');
			let solarMeta = gReligion.getRU('solarRevolution');
			let leaderRatio = 1 - game.getLimitedDR(0.09 + 0.01 * (1 + game.prestige.getBurnedParagonRatio()), 1.0);
			let unlocked = (gReligion.faith > solarMeta.faith || game.prestige.getPerk("voidOrder").researched) && resMap['faith'].maxValue > 750 && resMap['gold'].maxValue > 500;
			let trigger = (!solarMeta.on && unlocked && gReligion.getRU('solarchant').on && gReligion.transcendenceTier) ? 1.1 : options.auto.faith.trigger;
			if (!solarMeta.on && unlocked && options.auto.faith.items.solarRevolution.enabled) {
				buildManager.build("solarRevolution", "s", 1);
			}
			if (!game.religion.getRU("basilica").on && copyBuilds['basilica'].enabled && resPercent('culture') < 0.98) {
				if (!game.religion.getRU("sunAltar").on) {
					copyBuilds['scholasticism'].enabled = false;
					copyBuilds['goldenSpire'].enabled = false;
				}
				if (game.religion.faith > 1e4) {copyBuilds['sunAltar'].enabled = false;}
			}
			if (!game.ironWill && resMap['manpower'].maxValue < 15e3) {copyBuilds['templars'].enabled = false;}
			if (game.religion.getSolarRevolutionRatio() > 9.98 + 0.9 * game.getEffect("solarRevolutionLimit") && game.workshop.get('spaceManufacturing').researched && activitySummary.other.adore) {
				let noMax = ['scholasticism','goldenSpire','stainedGlass','basilica','templars'];
				noMax.forEach(index => {copyBuilds[index].max = -1;});
			}

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			let metaData = {};
			for (let name in copyBuilds) {
				let build = copyBuilds[name];
				let metabuild = buildManager.getBuild(name, build.variant);
				metaData[name] = metabuild;
				let button = buildManager.getBuildButton(name, build.variant);

				if (!button || !button.model.metadata) {
					if (!game.bld.getBuildingExt("ziggurat").on && build.variant === "z") {continue;}
					game["religionTab"].render();
					continue;
				}
				if (button) {
					let model = buildManager.getBuildButton(name, build.variant).model;
					let panel = (build.variant === 'c') ? game.science.get('cryptotheology').researched : true;
					let visible = (build.variant === 's') ? gReligion.faith >= metabuild.faith : model.visible;
					//console.log(model.metadata)
					if (visible && !model.enabled && (!model.metadata.noStackable || model.metadata.noStackable && !model.metadata.on)) {
						buildManager.getBuildButton(name, build.variant).controller.updateEnabled(model);
					}
					metaData[name].rHidden = (build.variant === 's') ? !visible : !(visible && model.enabled && panel);
				} else {
					metaData[name].rHidden = true;
				}
			}

			const buildList = bulkManager.bulk(copyBuilds, metaData, trigger);

			let refreshRequired = 0;
			let count;
			for (let entry in buildList) {
				if (buildList[entry].count > 0) {
					// 无金字塔过滤神印
					if (buildList[entry].id === 'marker') {
						if (!gReligion.getZU("blackPyramid").getEffectiveValue(game)) {
							if (!activitySummary.other['marker'] ) {
								activity(i18n('summary.marker'));
								storeForSummary('marker');
							}
							continue;
						}
					}

					count = (gReligion.getRU('solarRevolution').on) ? buildList[entry].count : 1;

					buildManager.build(buildList[entry].id, buildList[entry].variant, count);
					refreshRequired += 1;
				}
			}

			return refreshRequired;
		},
		chrono: function () {
			if (!game["timeTab"].visible) {return 0;}
			if (!game.science.get('voidSpace').researched || !game.workshop.get('chronoforge').researched) {return 0;}
			let refreshRequired = 0;
			const builds = options.auto.time.items;
			const buildManager = this.timeManager;
			//var craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			let trigger = options.auto.time.trigger;

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			const metaData = {};
			for (let name in builds) {
				let build = builds[name];
				metaData[name] = buildManager.getBuild(name, build.variant);

				let button = buildManager.getBuildButton(name, build.variant);
				if (!button || !button.model.metadata) {
					if (name === "cryochambers") {continue;}
					game["timeTab"].render();
					continue;
				}
				if (!button.model.enabled) {
					button.controller.updateEnabled(button.model);
					continue;
				}
				let model = button.model;
				let panel = (build.variant === 'chrono') ? buildManager.manager.tab.cfPanel : buildManager.manager.tab.vsPanel;
				metaData[name].tHidden = (!model.visible || !model.enabled || !panel.visible);
			}

			const buildList = bulkManager.bulk(builds, metaData, trigger);

			for (let entry in buildList) {
				if (buildList[entry].count > 0) {
					buildManager.build(buildList[entry].id, buildList[entry].variant, buildList[entry].count);
					refreshRequired = 1;
				}
			}

			return refreshRequired;
		},
		upgrade: function () {
			let i, prices, resource;
			const upgrades = options.auto.upgrade.items;
			const upgradeManager = this.upgradeManager;
			const craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			const buildManager = this.buildManager;
			let geodesy = game.workshop.get('geodesy').researched;
			let orbitalGeodesy = game.workshop.get('orbitalGeodesy').researched;
			let revolutionRatio = game.religion.getSolarRevolutionRatio();
			let refreshRequired  = 0;

			this.setTrait('scientist');
			//upgradeManager.workManager.render();
			//upgradeManager.sciManager.render();
			if (upgrades.techs.enabled && game["libraryTab"].visible) {
				const tech = game.science.techs;
				upgrades.techs.limited = true;
				techLoop:
				for (let upg of tech) {
					if (upg.researched || !upg.unlocked) {continue;}
					if (upgrades.techs.limited) {
						let titanium = resMap['titanium'].value;
						if (upg.name === 'biology' && resMap['compedium'].value < 750) {continue;}
						if (upg.name === 'ecology' && titanium < 6000) {continue;}
						if (upg.name === 'ai' && titanium < 10000) {continue;}
						if (upg.name === 'oilProcessing' && !game.science.get('nanotechnology').researched && titanium < 10000) {continue;}
						if (upg.name === 'drama' && 8 * craftManager.getTickVal(craftManager.getResource('parchment'), true) < 5) {continue;}
						if (upg.name === 'cryptotheology' && resMap['relic'].value > 105) {continue;}
					}

					let prices = dojo.clone(upg.prices);
					prices = game.village.getEffectLeader("scientist", prices);
					for (let resource of prices) {
						let name = resource.name;
						if (upgradeManager.getValue(name) < resource.val) {
							continue techLoop;
						}
					}
					refreshRequired = 1;
					upgradeManager.build(upg, 'science');
				}
			}

			if (upgrades.upgrades.enabled && game["workshopTab"].visible) {
				if (!game["workshopTab"].domNode) {refreshRequired = 2;}
				const work = game.workshop.upgrades;
				upgrades.upgrades.limited = true;
				let noup = [];
				if (upgrades.upgrades.limited) {
					let resStarchart = resMap['starchart'];
					let isFilter;
					noup = ['biofuel','gmo','invisibleBlackHand'];
					if (!game.bld.getBuildingExt('pasture').meta.on || game.bld.getBuildingExt('pasture').meta.stage === 0) {
						noup = noup.concat(['photovoltaic', 'thinFilm', 'qdot']);
					}
					if (!game.bld.getBuildingExt('aqueduct').meta.on || game.bld.getBuildingExt('aqueduct').meta.stage === 0) {
						noup.push('hydroPlantTurbines');
					}

					let autoM = ['factoryAutomation','advancedAutomation','pneumaticPress'];
					if (game.bld.get('steamworks').on < 6) {
						noup = noup.concat(['printingPress','combustionEngine','offsetPress','photolithography'], autoM);
					} else if (!game.opts.enableRedshift) {
						noup = noup.concat(autoM);
					}

					if (game.village.getJob('engineer').value < 5 && !game.workshop.getCraft('eludium').value) {
						noup = noup.concat(['spaceEngineers','aiEngineers','chronoEngineers','amFission','factoryRobotics','factoryOptimization']);
					}
					// 钢铁工厂
					if (game.time.getCFU("ressourceRetrieval").val < 8) {noup.push('steelPlants');}
					// 太阳革命
					if (!game.religion.getRU('solarRevolution').on && resMap['faith'].maxValue >= 750 && game.religion.faith > 1000) {
						noup.push('caravanserai');
					}
					// 缺电过滤碳封存
					if (game.resPool.energyProd - game.resPool.energyCons - 100 <= 0) {
						noup = noup.concat(['carbonSequestration']);
					}
					// 过滤钛升级
					if (game.globalEffectsCached['titaniumPerTickAutoprod'] < 0.002 && resMap['ship'].value < 40 && revolutionRatio > 1){
						noup = noup.concat(['titaniumAxe','silos','combustionEngine','astrolabe']);
					}
					// 过滤测地学
					isFilter = revolutionRatio > 8 || orbitalGeodesy;
					if (isFilter && !game.space.meta[0].meta[3].val && resStarchart.value < 1600 && revolutionRatio > 6) {
						noup.push('geodesy');
						if (resPercent('coal') > 0.8 && !orbitalGeodesy) {
							noup.push('fuelInjectors');
						}
					}
					// 没测地学过滤 地外计划
					if (revolutionRatio < 7 && !geodesy && resStarchart.value > 400) {noup.push('titaniumSaw');}
					// 冷藏
					if (!geodesy) {
						noup = noup.concat(['seti','refrigeration']);
					}
					// 印刷机 光刻机
					if (resMap['oil'].value < 7.5e4 && !geodesy) {
						noup = noup.concat(['offsetPress','photolithography']);
						if (resPercent('coal') > 0.8 && resPercent('oil') < 0.95 && !orbitalGeodesy) {
							noup.push('fuelInjectors');
						}
					}
					if (game.bld.getBuildingExt('factory').meta.val < 3) {noup.push('factoryLogistics');}
					// 微型亚空间
					if (!game.workshop.get('mWReactor').researched) {
						noup = noup.concat(['eludiumReflectors', 'amBases', 'coldFusion', 'amReactors','cryocomputing']);
					}
					// 星链 上行
					if (game.bld.getBuildingExt('library').meta.stage === 0) {
						noup = noup.concat(['starlink', 'uplink', 'cryocomputing']);
					}
					// 加速器
					if (game.bld.getBuildingExt('accelerator').meta.val < 5) {
						noup = noup.concat(['darkEnergy', 'stasisChambers', 'voidEnergy', 'tachyonAccelerators', 'lhc']);
					}
					// AI核心
					if (game.bld.getBuildingExt('aiCore').meta.val < 5) {
						noup = noup.concat(['machineLearning', 'aiBases']);
					}
					// 反应堆槽
					if (!game.bld.getBuildingExt('reactor').meta.val || resMap['ship'].value < 169) {noup.push('reactorVessel');}
					// 太阳能卫星
					if (game.space.getBuilding('sattelite').val < 6) {
						noup = noup.concat(['solarSatellites', 'satelliteRadio']);
					}
					// 星图产出
					if (resStarchart.perTickCached) {
						if (game.challenges.isActive('blackSky') && resStarchart.perTickCached < 1) {
							noup = noup.concat(['geodesy']);
						}
					} else {
						noup = noup.concat(['hubbleTelescope']);
					}
					// 钍反应堆
					if (resMap['thorium'].value < 3e4) {noup.push('thoriumReactors');}
					// 天体观测仪
					isFilter = resMap['science'].maxValue > 19e4 && resStarchart.value < 2075;
					if (isFilter || resMap['titanium'].value < 15) {
						noup = noup.concat(['astrolabe','unobtainiumReflectors','lhc','titaniumMirrors']);
					}
					// 无政府挑战
					if (game.challenges.isActive("anarchy")) {
						noup = noup.concat(['logistics', 'augumentation', 'internet', 'neuralNetworks','register']);
					}
					// 钢铁意志
					if (game.ironWill) {
						noup = noup.concat(['logistics','augumentation','internet','neuralNetworks','mineralHoes','ironHoes','miningDrill',
						'mineralAxes','ironAxes','steelAxe','titaniumAxe','alloyAxe','ironwood','concreteHuts','unobtainiumHuts','eludiumHuts',
						'geodesy','register','unobtainiumDrill','assistance','astrophysicists','register']);
					} else if (!game.workshop.get('concreteHuts').researched) {
						noup.push('concreteWarehouses');
					}
				}

				workLoop:
				for (let upg of work) {
					if (upg.researched || !upg.unlocked) {continue;}
					let upgName = upg.name;
					if (noup.indexOf(upgName) !== -1) {continue;}

					prices = dojo.clone(upg.prices); // game.village.getEffectLeader will override its argument
					prices = game.village.getEffectLeader("scientist", prices);
					for (resource of prices) {
						if (upgradeManager.getValue(resource.name, upgName) < resource.val) {continue workLoop;}
					}

					refreshRequired += 1;
					upgradeManager.build(upg, 'workshop');
				}
			}

			if (upgrades.policies.enabled && game["libraryTab"].visible) {
				// write a function to make breaking big loop easier
				(function (){
					const policies = game.science.policies;
					let lastIndex = i = 0;
					const length = policies.length;
					const toResearch = [];
					let ratio = (game.science.get('astronomy').researched) ? 1 : 3;

					// A **little** more efficient than game.science.getPolicy if options.policies is right order
					for (i in options.policies) {
						let targetName = options.policies[i];
						for (let j in policies) {
							j = parseInt(j); // fuck js
							let policy = policies[(j + lastIndex) % length];
							if (policy.name === targetName) {
								lastIndex = j + lastIndex + 1;
								if (!policy.researched) {
									if (policy.blocked) {continue;}
									if (policy.unlocked) {
										if (policy.requiredLeaderJob === undefined ||
											(game.village.leader != null && game.village.leader.job === policy.requiredLeaderJob)
										){
											toResearch.push(policy);
										}
									}
								}
								break;
							}
						}
					}
					for (i of toResearch) {
						for (let resource of i.prices) {
							if (craftManager.getValueAvailable(resource.name, true) < resource.val * ratio) {continue;}
							upgradeManager.build(i, 'policy');
						}
					}
				})();
			}

			if (upgrades.missions.enabled && game["spaceTab"].visible) {
				let subTrigger = upgrades.missions.subTrigger;
				let missionsLength = Math.min(game.space.meta[0].meta.length, subTrigger);
				let index = 0;
				const missions = game.space.meta[0].meta;
				missionLoop:
				for (i = 0; i < missionsLength ; i++) {
					let mission = missions[i];
					if (mission.val) {index++;}
					if (!(mission.unlocked && mission.val < 1)) {continue;}
					if (!orbitalGeodesy && !game.ironWill && !geodesy) {break;}
					if (game["spaceTab"].planetPanels.length !== index) {game["spaceTab"].render();}

					const Btn = game["spaceTab"].GCPanel.children[i];
					if (!Btn || !Btn.model.metadata) {
						game["spaceTab"].render();
						continue;
					}

					if (!missions[3].val && i === 2 && subTrigger !== 3 && !game.challenges.isActive('blackSky')) {continue;}

					if (Btn.model.metadata.val || Btn.model.metadata.on) {continue;}
					prices = Btn.model.prices;
					for (resource of prices) {
						if (craftManager.getValueAvailable(resource.name, true) < resource.val) {continue missionLoop;}
					}
					if (!Btn.model.enabled) {
						Btn.controller.updateEnabled(Btn.model);
						continue;
					}
					refreshRequired += 1;
					Btn.controller.build(Btn.model, 1);
					if (i === 7 || i === 12) {
						activity(i18n('upgrade.space.mission', [missions[i].label]));
					} else {
						activity(i18n('upgrade.space', [missions[i].label]));
					}
				}
			}

			if (upgrades.races.enabled && game.diplomacy.hasUnlockedRaces()) {
				let maxRaces = (game.diplomacy.get('leviathans').unlocked) ? 8 : 7;
				if (game["diplomacyTab"].racePanels.length < maxRaces) {
					let unlockRace = function (race) {
						if (game.diplomacy.get(race).unlocked) {return;}
						let manpower = craftManager.getValueAvailable('manpower', true);
						if (manpower >= 1000) {
							game.resPool.get('manpower').value -= 1000;
							maxRaces = 'render';
							iactivity('upgrade.race', [game.diplomacy.unlockRandomRace().title], 'ks-trade');
						}
					};
					if (game.challenges.isActive("pacifism") || !game.village.sim.kittens.length || resMap['gold'].value > 15) {
						unlockRace('lizards');
						unlockRace('sharks');
						unlockRace('griffins');
					}
					if (game.resPool.get("culture").value >= 1500) {unlockRace('nagas');}
					if (game.resPool.get("ship").value >= 1) {unlockRace('zebras');}
					if (game.resPool.get("ship").value >= 100 && game.resPool.get("science").maxValue > 125000) {unlockRace('spiders');}
					if (game.science.get("nuclearFission").researched) {unlockRace('dragons');}
					if (!game["diplomacyTab"].racePanels.length || maxRaces === 'render') {game["diplomacyTab"].render();}
				}
			}

			if (upgrades.buildings.enabled) {
				let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
				let energy = (winterProd && winterProd - 1 < game.resPool.energyCons);
				let pastureMeta = game.bld.getBuildingExt('pasture').meta;
				let pastures = (pastureMeta.stage === 0) ? pastureMeta.val : 0;
				let aqueductMeta = game.bld.getBuildingExt('aqueduct').meta;
				let aqueducts = (aqueductMeta.stage === 0) ? aqueductMeta.val : 0;
				let upgradeBuilding = (name, meta) => {
					let prices = meta.stages[1].prices;
					if (bulkManager.singleBuildPossible(meta, prices, 1 )) {
						buildManager.sellBuild(name);
						game.resPool.payPrices(prices);
						meta.stage = 1;
						meta.on = 1;
						meta.val = 1;
						if (meta.upgrades) {
							if (meta.updateEffects) {
								meta.updateEffects(meta, game);
							}
							cacheUpgrades(meta);
						}
						game.bld.getBuildingExt(name)._metaCache = null;
						game.bld.getBuildingExt(name)._metaCacheStage = 1;
						buildManager.manager.render();
						iactivity('summary.upgrade.building.' + name, [] , 'ks-upgBld');
						storeForSummary('upgrade.building.' + name);
						msgSummary('upg' + name.charAt(0).toUpperCase() + name.slice(1), true);
						return 2;
					}
				};

				if (pastureMeta.stage === 0) {
					if (pastureMeta.stages[1].stageUnlocked) {
						let broadcastTower = game.bld.getBuildingExt('amphitheatre').meta.stage === 1;
						let boolean = (energy && broadcastTower && game.getResourcePerTick('titanium', true) > 25);
						if (craftManager.getPotentialCatnip(true, 0, aqueducts) > 45 && boolean && options.auto.build.items.solarFarm.enabled) {
							return upgradeBuilding('pasture', pastureMeta);
						} else {
							msgSummary('upgPasture', '', 'ks-upgBld');
						}
					}
				}

				if (aqueductMeta.stage === 0) {
					if (aqueductMeta.stages[1].stageUnlocked) {
						let catnip = craftManager.getPotentialCatnip(true, pastures, 0) > 90;
						if (catnip && energy && pastureMeta.stage === 1 && options.auto.build.items.hydroPlant.enabled) {
							return upgradeBuilding('aqueduct', aqueductMeta);
						} else {
							msgSummary('upgAqueduct', '', 'ks-upgBld');
						}
					}
				}

				let libraryMeta = game.bld.getBuildingExt('library').meta;
				let scienceBldMax = 0.1 * libraryMeta.totalEffectsCached.scienceMax / (1 + game.prestige.getParagonProductionRatio());
				if (libraryMeta.stage === 0) {
					if (libraryMeta.stages[1].stageUnlocked) {
						let ratio = 1 + game.bld.get('biolab').val * 0.01;
						ratio = game.resPool.get('compedium').value * 3 > scienceBldMax / ratio && game.bld.getEffect('scienceMax') > 2e6;
						ratio |= craftManager.getTickVal(resMap['concrate']) > 600;
						if (ratio && options.auto.build.items.dataCenter.enabled) {
							if (winterProd >= game.resPool.energyCons + 150) {return upgradeBuilding('library', libraryMeta);}
						} else {
							msgSummary('upgLibrary', '', 'ks-upgBld');
						}
					}
				}

				let amphitheatreMeta = game.bld.getBuildingExt('amphitheatre').meta;
				if (amphitheatreMeta.stage === 0) {
					if (amphitheatreMeta.stages[1].stageUnlocked) {
						if (game.getResourcePerTick('titanium', true) > 2 || resMap['ship'].value > 200) {
							return upgradeBuilding('amphitheatre', amphitheatreMeta);
						} else {
							msgSummary('upgAmphitheatre', '', 'ks-upgBld');
						}
					}
				}
			}

			return refreshRequired;
		},
		build: function (builds) {
			const buildManager = this.buildManager;
			const craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			let trigger = options.auto.build.trigger;
			let refreshRequired = 0;
			let blackSky = game.challenges.isActive('blackSky');
			let vitruvianFeline = game.prestige.getPerk('vitruvianFeline').researched;
			let atheism = game.challenges.isActive('atheism');
			let geodesy = game.workshop.get('geodesy').researched;
			let orbitalGeodesy = game.workshop.get('orbitalGeodesy').researched;
			let spaceManufacturing = game.workshop.get('spaceManufacturing').researched;

			let solarMeta = game.religion.getRU('solarRevolution');
			let revolutionRatio = game.religion.getSolarRevolutionRatio();
			let theology = game.science.get('theology').researched;
			let build2 = {};
			let copyItem;
			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			// 每次第一次运行builds为空
			if (typeof builds != 'object') {
				copyItem = {};
				let items = JSON.parse(JSON.stringify(options.auto.build.items));
				const important = {
					amphitheatre:items['amphitheatre'],
					reactor:items['reactor'],
					magneto:items['magneto'],
					steamworks:items['steamworks'],
				};
				items = Object.assign(important, items);

				let scienceMap = resMap['science'];
				let scienceTrigger = scienceMap.value / scienceMap.maxValue;
				let scienceBuild = (name, max, trigger) => {
					let bld = items[name];
					let bldMax = bld.max;
					if (name) {
						if (scienceTrigger < trigger) {
							bld.max = (bldMax === -1) ? max : Math.min(max, bldMax);
							if (game.bld.getBuildingExt(name).meta.val >= max && !spaceManufacturing) {
								msgSummary('scienceBld');
							}
						} else {
							bld.max = (bldMax === -1) ? game.bld.getBuildingExt(name).meta.val + 2 : bldMax;
						}
					}
				};
				if (revolutionRatio < 50) {
					scienceBuild('observatory', 300, 0.98);
					scienceBuild('academy', Math.max(22 *(game.prestige.getParagonProductionRatio() + 1), 100), 0.99);
					scienceBuild('biolab', 200, 1);
				}

				let winterTick = craftManager.getPotentialCatnip(false);
				let machinery = game.science.get('machinery').researched;
				let astronomy = game.science.get('astronomy');
				if (scienceTrigger < 0.98 && !astronomy.researched && (!machinery || astronomy.unlocked) && resMap['minerals'].value) {
					items['academy'].max = 6 * (game.prestige.getParagonProductionRatio() + 1);
					msgSummary('academy');
				}
				//图书馆牧场
				let pasture = items['pasture'];
				if (theology) {
					msgSummary('smelter', true);
					msgSummary('pasture', true);
				} else {
					let smelter = game.bld.getBuildingExt('smelter').meta;
					items['smelter'].max = 1;
					if (Math.ceil(resMap['wood'].perTickCached * 2) > smelter.val && Math.ceil(resMap['minerals'].perTickCached) > smelter.val) {
						items['smelter'].max = smelter.val + 1;
						msgSummary('smelter');
					}
					//if (machinery) {
					//	items['pasture'].enabled = false;
					//}
					let pastureMeta = game.bld.getBuildingExt('pasture').meta;
					if (pastureMeta.unlocked && pastureMeta.val > 10) {
						msgSummary('pasture');
					}
					if (!winterTick) {
						items['pasture'].max = 20;
					}
					let hutVal = game.bld.getBuildingExt('hut').meta.val - 2;
					items['library'].max = (hutVal > 0) ? Math.floor(hutVal * 11) : items['library'].max;
				}
				// 工坊
				if (!game.science.get('writing').researched && resMap['minerals'].value) {
					items['workshop'].max = 1;
					msgSummary('workshop');
				} else {
					msgSummary('workshop', true);
				}

				//熔炉
				if (!game["workshopTab"].visible && !game.challenges.isActive('winterIsComing') && game.science.get('animal').researched) {
					items['smelter'].max = 0;
					if (pasture.max === -1) {
						items['pasture'].enabled = false;
						msgSummary('pasture');
					}
				}
				// 没铀不造反应堆
				let reactor = items['reactor'];
				if (resMap['uranium'].value < 100) {
					reactor.max = 0;
				} else if (!spaceManufacturing && resMap['titanium'].maxValue > 125000) {
					reactor.max = 25;
				}

				// 天文台
				if (blackSky && resMap['science'].maxValue > 3e5 && !orbitalGeodesy) {items['observatory'].max = 0;}

				// 解锁磁电机才会造蒸汽工房
				let steamW = items['steamworks'];
				if (!game.challenges.isActive("pacifism") && !game.bld.get('magneto').val) {
					if (game.bld.get('steamworks').unlocked && steamW.enabled && resMap['gear'].value > 19) {
						msgSummary('steamworks');
						steamW.enabled = false;
					}
				} else {
					msgSummary('steamworks', true);
				}
				// 无节日不造酿酒厂
				let Brewery = items['brewery'];
				if (!game.calendar.festivalDays) {Brewery.max = 0;}

				// 神学前最多只造 1个神殿
				let temple = items['temple'];
				let tradepost = items['tradepost'];
				let solarUnlocked = (game.religion.faith > solarMeta.faith || game.prestige.getPerk("voidOrder").researched);
				let goldTri = resMap['gold'].value / resMap['gold'].maxValue;
				if (!blackSky && resMap['titanium'].value < 25) {
					temple.max = Math.max(30, 10 * (1 + revolutionRatio));
				}
				// 商队驿站
				let caravanserai = game.workshop.get('caravanserai');
				if (caravanserai.unlocked && !caravanserai.researched) {
					temple.enabled = false;
				}
				if (!theology && game.science.get('philosophy').researched && goldTri < 0.96 && !atheism) {
					let one = game.village.happiness < 4 && game.bld.get('temple').val === 1 && game.prestige.getPerk('renaissance').researched;
					temple.max = (one) ? 1 : Math.floor(7.5 / (1 + game.prestige.getParagonStorageRatio()));
					tradepost.max = 12;
					msgSummary('tradepost');
				}
				// 太阳革命前不造交易所和神殿
				if (!solarMeta.on && !atheism && theology) {
					if (options.auto.faith.items.solarRevolution.enabled && resMap['faith'].maxValue > 750 && resMap['gold'].maxValue > 560) {
						if (game.science.get('philosophy').researched) {
							msgSummary('temple');
							temple.max =  Math.floor(7.5 / (1 + game.prestige.getParagonStorageRatio()));
							if (resMap['gold'].value > 560) {
								temple.max = game.bld.getBuildingExt('temple').meta.val + 1;
							}
						}
					}
					if (resMap['gold'].maxValue > 500) {
						tradepost.max = 12;
						if (resMap['gold'].value > 525) {tradepost.max = Math.min(18, game.bld.getBuildingExt('tradepost').meta.val + 1);}
					}
					msgSummary('tradepost');
				} else if (theology) {
					msgSummary('temple', true);
					msgSummary('tradepost', true);
				}
				let religionRU = game.religion.getRU("stainedGlass").on && game.religion.getRU("basilica").on;
				let expect = options.auto.faith.addition.autoPraise.expect;
				if (!religionRU && game.religion.faith > 1e4 && resMap['gold'].maxValue > 780 && revolutionRatio) {
					temple.max = 21 - Math.min(10, revolutionRatio * 10);
					tradepost.max = 30 - Math.min(12, revolutionRatio * 10);
				}

				// 油井 ===> 预计与煅烧 数量关系
				// 煅烧炉
				let calciner = items['calciner'];
				let calcinerMax = calciner.max;
				if (orbitalGeodesy) {
					if (!spaceManufacturing || !game.space.meta[0].meta[0].on) {
						calciner.max = (calcinerMax === -1) ? 47 * (1 + game.getEffect("productionRatio")) : Math.min(50, calcinerMax);
					}
				} else {
					if (scienceMap.maxValue > 150000 && resMap['oil'].maxValue > 35000) {
						calciner.max = (calcinerMax === -1) ? 25 : Math.min(25, calcinerMax);
					} else {
						let amt = (1 + game.prestige.getParagonProductionRatio() * 7) * Math.max(1, Math.log(revolutionRatio));
						calciner.max = (calcinerMax === -1) ? amt : Math.min(amt, calcinerMax);
					}
				}

				if (game.getResourcePerTick('oil', true) < 0.24) {
					calciner.max = 0;
					items['magneto'].max = 0;
				}

				// 太阳能
				let solarFarm = items['solarFarm'];
				let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
				if (!spaceManufacturing && resMap['titanium'].maxValue > 125000 && winterProd > game.resPool.energyCons) {
					solarFarm.enabled = false;
				}

				// 广播塔 宅邸
				let mansion = items['mansion'];
				let broadcastTower = items['broadcastTower'];
				let archeology = game.science.get('archeology').researched;
				let shipVal = resMap['ship'].value;
				let titaniumMore = (orbitalGeodesy || shipVal > 600);
				if (game.science.get('electronics').researched && !spaceManufacturing) {
					msgSummary('broadcastTower');
					broadcastTower.max = 8;
					mansion.max = 80;
				} else {
					msgSummary('broadcastTower', true);
				}
				// 宅邸生物实验室
				let titaniumMap = resMap['titanium'];
				let biolab = items['biolab'];
				if (!geodesy && !orbitalGeodesy) {
					if (!blackSky && titaniumMap.value > 1 && mansion.max) {
						msgSummary('mansion');
						mansion.max = 10;
					}
					if (resMap['alloy'].value > 25 && game.science.get('biology').researched) {
						biolab.max = 2;
						msgSummary('biolab');
					}
				} else {
					if (titaniumMore && !mansion.max && resPercent('titanium') === 1) {
						mansion.max = 45;
						msgSummary('mansion');
					}
					if (spaceManufacturing) {
						msgSummary('biolab', true);
						msgSummary('mansion', true);
						msgSummary('scienceBld', true);
					} else {
						if (titaniumMap.value / titaniumMap.maxValue <= 0.96) {
							mansion.max = Math.max(135 - game.village.maxKittens, Math.floor(17 * (game.prestige.getParagonProductionRatio() + 1)));
							msgSummary('mansion');
							biolab.max = 10;
						}
					}
				}

				//铸币厂
				if (!game.challenges.isActive("pacifism")) {
					let mint = items['mint'];
					let manpower = game.resPool.get('manpower').maxValue;
					let mintV = game.bld.getBuildingExt('mint').meta.val;
					if (manpower <= 2e4) {
						mint.enabled = false;
					} else if (!mintV) {
						mint.max = 2;
					} else if (!orbitalGeodesy && (!geodesy || !game.workshop.get("miningDrill").researched)) {
						mint.enabled = false;
					}
				}
				let optimize = ['library','academy','pasture','barn','harbor','oilWell','warehouse','broadcastTower','accelerator','mansion','quarry','aqueduct','chapel', 'lumberMill','factory','biolab'];
				for (let name in items) {
					let item = items[name];
					if (!item.enabled || !item.max) {continue;}
					if (optimize.indexOf(name) === -1) {
						copyItem[name] = item;
					} else {
						build2[name] = item;
					}
				}
			}

			const metaData = {};
			builds = copyItem || builds;
			for (let name in builds) {
				let build = builds[name];
				metaData[name] = buildManager.getBuild(build.name || name).meta;
			}

			const buildList = bulkManager.bulk(builds, metaData, trigger, 'bonfire');

			let calcinerMeta = game.bld.getBuildingExt('calciner').meta;
			if (blackSky && options.auto.build.items.calciner.enabled && calcinerMeta.unlocked && !calcinerMeta.val) {
				buildManager.build("calciner", undefined, 1);
			}

			if (buildList) {
				for (let i = 0; i < buildList.length; i++) {
					let count = buildList[i].count;
					let id = buildList[i].id;
					count = buildManager.count(id, count);
					if (count > 0) {
						buildManager.build(buildList[i].name || id, buildList[i].stage, count);
						refreshRequired += 1;
					}
				}
			}

			if (JSON.stringify(build2) !== "{}") {
				refreshRequired += this.build(build2);
			}

			return refreshRequired;
		},
		space: function () {
			const builds = JSON.parse(JSON.stringify(options.auto.space.items));
			const buildManager = this.spaceManager;
			const craftManager = this.craftManager;
			const bulkManager = this.bulkManager;
			let trigger = options.auto.space.trigger;
			let blackSky = game.challenges.isActive("blackSky");
			let solarRevolution = game.religion.getSolarRevolutionRatio();
			let starchartVal = resMap['starchart'].value;
			if (blackSky) {
				builds['researchVessel'].enabled = false;
				if (builds['spaceStation'].enabled) {
					$('#toggle-spaceStation').click();
				}
			} else if (!trigger && solarRevolution > 6 && !game.space.meta[0].meta[3].val && starchartVal < 2000) {
				trigger = 9;
			}

			let better = blackSky || solarRevolution > 5;
			let sattelite = game.space.getBuilding('sattelite').val;
			if (!trigger) {
				let fourSattelite = 2200 * Math.pow(1.12, sattelite);
				if (starchartVal < fourSattelite || !game.ironWill) {builds['spaceStation'].max = 0;}
				if (starchartVal > fourSattelite) {builds['spaceStation'].max = sattelite + 1;}
				if (resPercent('unobtainium') < 0.8) {builds['moonBase'].max = 0;}
			}
			if (game.space.getBuilding('sattelite').val < 5 && buildManager.getBuildButton("sattelite") && better) {
				buildManager.build("sattelite", 1);
			}
			if (blackSky || solarRevolution > 6) {
				if (!blackSky && game.space.getBuilding('researchVessel').val < 1 && builds.sattelite.enabled) {
					buildManager.build("researchVessel", 1);
				}
				if (game.space.getBuilding('researchVessel').val < 4) {
					builds['spaceStation'].max = 0;
				}
			}

			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			//buildManager.manager.render();

			const metaData = {};
			for (let name in builds) {
				//var build = builds[name];
				metaData[name] = buildManager.getBuild(name);
			}

			const buildList = bulkManager.bulk(builds, metaData, trigger, 'space');

			let refreshRequired = 0;

			for (let entry in buildList) {
				let item = buildList[entry];
				if (item.count > 0) {
					let id  = item.id;
					if (id === 'containmentChamber') {
						let antimatter = resMap['antimatter'];
						let perYear = game.getEffect('antimatterProduction');
						let energyExtra = (game.resPool.energyProd < game.resPool.energyCons);
						if (perYear * 500 + antimatter.value < antimatter.maxValue || energyExtra) {
							continue;
						}
					}
					if (id === 'idsattelites' && solarRevolution < 5 && !game.space.getProgram('piscineMission').val) {
						item.count = Math.floor(item.count * 0.2);
					}

					buildManager.build(item.id, item.count);
					refreshRequired = 1;
				}
			}

			return refreshRequired;
		},
		craft: function () {
			const crafts = options.auto.craft.items;
			const manager = this.craftManager;
			const craftsItem = ['ship','beam','wood','slab','alloy','gear','concrate','steel','plate','scaffold','tanker','parchment','manuscript','compedium','blueprint','kerosene','megalith','eludium','thorium'];
			let trigger = options.auto.craft.trigger;
			let craftUnlock = !game.science.get("construction").researched || !game.bld.getBuildingExt('workshop').meta.on;
			let amount, craft, require;

			this.setTrait('metallurgist');
			this.setTrait('chemist');
			this.setTrait('engineer');

			for (const name of craftsItem) {
				craft = crafts[name];
				//var current = !craft.max ? false : manager.getResource(name);
				require = craft.require ? manager.getResource(craft.require) : 'noRequire';
				amount = 0;
				if (!craft.enabled) {continue;}
				if (craftUnlock && name !== "wood") {continue;}
				// Ensure that we have reached our cap
				//if (current && current.value > craft.max) {continue;}
				if (!manager.getCraft(name).unlocked) {continue;}
				// Craft the resource if we meet the trigger requirement
				if (require === 'noRequire' || (require.value / require.maxValue >= trigger && require.value <= 2 * require.maxValue)) {
					amount = manager.getLowestCraftAmount(name, craft.limited, craft.limRat, require);
				} else if (craft.limited) {
					amount = manager.getLowestCraftAmount(name, craft.limited, craft.limRat, false);
				}
				if (amount >= 1) {
					manager.craft(name, amount);
				}
			}
			let upgrades = options.auto.upgrade.items.upgrades;
			if (upgrades.cache && game.workshop.get(upgrades.cache).researched) {upgrades.cache = false;}
		},
		holdFestival: function () {
			if (!(game.science.get('drama').researched && game.calendar.festivalDays < 400)) {return;}
			if (!game.prestige.getPerk('carnivals').researched && game.calendar.festivalDays > 0) {return;}
			if (game.village.getKittens() < 5 && game.resPool.get("zebras").value === 0) {return;}

			let craftManager = this.craftManager;
			let catpowProf = 4000 * craftManager.getTickVal(craftManager.getResource('manpower'), true) > 1500;
			let cultureProf = 4000 * craftManager.getTickVal(craftManager.getResource('culture'), true) > 5000;
			let parchProf = 4000 * craftManager.getTickVal(craftManager.getResource('parchment'), true) > 2500;

			if (!(catpowProf && cultureProf && (game.resPool.get('parchment').value >= 7500 || parchProf))) {return;}

			if (game.science.getPolicy('carnivale').researched) {
				let luxury = (!game.resPool.get("furs").value || !game.resPool.get("ivory").value || !game.resPool.get("spice").value);
				if (luxury) {return;}
			}

			let villageTab = game["villageTab"];
			let festivalBtn = villageTab.festivalBtn;
			// Render the tab to make sure that the buttons actually exist in the DOM. Otherwise, we can't click them.
			if (!festivalBtn || !festivalBtn.model) {return villageTab.render();}

			let price = festivalBtn.model.prices;
			if (game.resPool.hasRes(price)) {
				game.resPool.payPrices(price);
				game.village.holdFestival(1);

				storeForSummary('festival', 1);
				if (game.calendar.festivalDays > 400) {
					iactivity('festival.extend', [], 'ks-festival');
				} else {
					iactivity('festival.hold', [], 'ks-festival');
				}
			}
		},
		observeStars: function () {
			let calendar = game.calendar;
			if (calendar.observeBtn != null && !game.workshop.get("seti").researched){
				calendar.observeHandler();
				iactivity('act.observe', [], 'ks-star');
				storeForSummary('stars', 1);
			}
		},
		hunt: function () {
			clearTimeout(this.huntID);
			let manpower = this.craftManager.getResource('manpower');
			if (manpower.value < 100 || game.challenges.isActive("pacifism")) {return;}

			// 无独角兽牧场 强制打猎
			let unicornValue = resMap['unicorns'].value;
			let unicorn = game.achievements.get('unicornConspiracy').unlocked || unicornValue;
			let unicornPasture = game.bld.getBuildingExt('unicornPasture').meta.val;
			let unicornHunt = (!unicornPasture && unicorn && manpower.value > 700 && unicornValue < 3 && game.getEffect("craftRatio") > 0.06);

			// 铸币厂前加速打猎
			let aveOutput = this.craftManager.getAverageHunt();
			let huntCount = Math.floor(manpower.value / 100);
			let architecture = game.science.get('writing').researched;
			let preCount = (!resMap['furs'].value || resMap['parchment'].value < 25) ? Math.max(30 , Math.floor(0.5 * huntCount)) : 0;
			let mint = (architecture && huntCount > preCount && preCount > 0);

			let itemHunt = options.auto.options.items.hunt;
			let manpowerBoolean = itemHunt.subTrigger <= manpower.value / manpower.maxValue;
			let tradeCache = !manpowerBoolean && options.auto.trade.cache;
			if (manpowerBoolean || mint || unicornHunt || tradeCache || itemHunt.time) {
				// No way to send only some hunters. Thus, we hunt with everything
				if (manpower.perTickCached < 100 && manpower.value >= 200) {huntCount -= 1;}
				if (mint) {huntCount = preCount;}

				if (unicornHunt) {
					huntCount = 7;
					activity(i18n('act.hunt.unicorn'));
				}

				if (tradeCache) {
					huntCount = Math.min(huntCount, Math.max(Math.floor(manpower.perTickCached / 50), 1));
					options.auto.trade.cache = false;
					iactivity('act.hunt.trade', '', 'ks-hunt');
				} else if (itemHunt.time) {
					itemHunt.time = false;
				}

				if (huntCount <= 0) {return;}
				let hunter = (game.ironWill) ? resMap['zebras'].title : $I('effectsMgr.statics.maxKittens.title');
				game.resPool.addResEvent("manpower", -huntCount * 100);
				this.setTrait('manager');
				game.village.gainHuntRes(huntCount);
				this.setTrait();
				if(huntCount >= 1000 && !game.challenges.getChallenge("pacifism").unlocked) {game.challenges.getChallenge("pacifism").unlocked = true;}
				if (options.auto.cache.trait['manager']) {
					iactivity('act.hunt', ['管理者派出' + huntCount, hunter], 'ks-hunt');
					storeForSummary('hunt.manager', huntCount);
				} else {
					storeForSummary('hunt', huntCount);
					iactivity('act.hunt', [huntCount, hunter], 'ks-hunt');
				}

				const trueOutput = {};

				for (let out in aveOutput) {
					const res = this.craftManager.getResource(out);
					trueOutput[out] = (res.maxValue > 0) ? Math.min(aveOutput[out] * huntCount, Math.max(res.maxValue - res.value, 0)) : aveOutput[out] * huntCount;
				}

				this.cacheManager.pushToCache({'materials': trueOutput});

				//game.village.huntAll();
			}
		},
		trade: function () {
			let i;
			const craftManager = this.craftManager;
			const tradeManager = this.tradeManager;
			const cacheManager = this.cacheManager;
			cacheManager.checkForTimer();
			let gold = craftManager.getResource('gold');
			let trades = [];
			let optionTrade = options.auto.trade;
			let requireTrigger = optionTrade.trigger;

			if (!tradeManager.singleTradePossible(undefined)) {return;}

			let season = game.calendar.getCurSeason().name;
			let goldTrigger = requireTrigger <= gold.value / gold.maxValue;

			let isLimited;
			this.setTrait('merchant');
			let index = 0;
			let solarRevolution = game.religion.getRU('solarRevolution');
			let challenge = game.challenges.anyChallengeActive();
			let renaissance = game.prestige.getPerk('renaissance').researched;
			// Determine how many races we will trade this cycl
			let trade,race,name,require;
			for (name in optionTrade.items) {
				trade = optionTrade.items[name];

				// Check if the race is in season, enabled, unlocked, and can actually afford it
				race = tradeManager.getRace(name);
				if (!race.unlocked) {continue;}
				if (!game["diplomacyTab"].racePanels[index]) {game["diplomacyTab"].render();}
				index++;
				if (!trade.enabled) {continue;}
				if (!trade[season]) {continue;}
				let button = tradeManager.getTradeButton(race.name);

				if (!button || !tradeManager.singleTradePossible(name)) {continue;}
				if (name === 'nagas' && resMap['concrate'].value > 1000 && !game.ironWill) {continue;}

				require = trade.require ? craftManager.getResource(trade.require) : false;

				// If we have enough to trigger the check, then attempt to trade
				let prof = tradeManager.getProfitability(name);
				prof = (name === 'leviathans' && game.time.getCFU("ressourceRetrieval").val && resMap['timeCrystal'].value < 500) ? true : prof;
				if (name === 'zebras' && !prof && game.calendar.season === 2) {continue;}

				prof &= name !== 'sharks' || race.embassyLevel > 10;

				// 优先太阳革命
				let faithValue = resMap['faith'].value;

				let solar = (solarRevolution.on || challenge || !renaissance);

				// 有采矿钻和登红月后优先点出超越和赞美群星
				let transcendence = (game.religion.getRU("transcendence").on || !options.auto.faith.items.transcendence.enabled);
				let apocripha = (game.religion.getRU('apocripha').on || !options.auto.faith.items.apocripha.enabled);
				let miningDrillMoon = (transcendence && apocripha) || !game.space.meta[0].meta[1].on || !game.workshop.meta[0].meta[58].researched;
				if (trade.limited && prof && solar && miningDrillMoon) {
					trades.push(name);
					isLimited = true;
				} else if ((!require || requireTrigger <= require.value / require.maxValue) && goldTrigger) {
					trades.push(name);
				}
			}

			let catnipNow = game.resPool.get('catnip').value + 100 * game.getResourcePerTick("catnip", true);
			let sharksAmt = tradeManager.getLowestTradeAmount('sharks');
			if (catnipNow < 0 && sharksAmt) {
				let sharks = game.diplomacy.get('sharks');
				let catnip = tradeManager.getAverageTrade(sharks).catnip;
				tradeManager.trade('sharks', Math.max(Math.ceil(catnipNow / -catnip), sharksAmt));
				iactivity('trade.catnip');
			}

			if (trades.length === 0) {return;}

			isLimited = (isLimited && !goldTrigger) ? 0.25 : 1;
			// Figure out how much we can currently trade
			let maxTrades = Math.floor(tradeManager.getLowestTradeAmount(undefined, true, false) * isLimited);

			// Distribute max trades without starving any race

			if (maxTrades < 1) {return;}

			const maxByRace = [];
			for (i = 0; i < trades.length; i++) {
				name = trades[i];
				trade = options.auto.trade.items[name];
				require = trade.require ? craftManager.getResource(trade.require) : false;
				let trigConditions = ((!require || requireTrigger <= require.value / require.maxValue) && requireTrigger <= gold.value / gold.maxValue);
				let tradePos = Math.floor(tradeManager.getLowestTradeAmount(name, trade.limited, trigConditions) * isLimited);
				if (tradePos < 1) {
					trades.splice(i, 1);
					i--;
					continue;
				}
				maxByRace[i] = tradePos;
			}

			if (trades.length === 0) {return;}

			const tradesDone = {};
			while (trades.length > 0 && maxTrades >= 1) {
				if (maxTrades < trades.length) {
					let j = Math.floor(Math.random() * trades.length);
					if (!tradesDone[trades[j]]) {tradesDone[trades[j]] = 0;}
					tradesDone[trades[j]] += 1;
					maxTrades -= 1;
					trades.splice(j, 1);
					maxByRace.splice(j, 1);
					continue;
				}
				let minTrades = Math.floor(maxTrades / trades.length);
				let minTradePos = 0;
				for (i = 0; i < trades.length; i++) {
					if (maxByRace[i] < minTrades) {
						minTrades = maxByRace[i];
						minTradePos = i;
					}
				}
				if (!tradesDone[trades[minTradePos]]) {tradesDone[trades[minTradePos]] = 0;}
				tradesDone[trades[minTradePos]] += minTrades;
				maxTrades -= minTrades;
				trades.splice(minTradePos, 1);
				maxByRace.splice(minTradePos, 1);
			}
			if (tradesDone.length === 0) {return;}

			const tradeNet = {};
			for (name in tradesDone) {
				race = tradeManager.getRace(name);
				let amt = goldTrigger ? 1 : tradesDone[name] * 0.6;

				let materials = tradeManager.getMaterials(name);
				for (let mat in materials) {
					if (!tradeNet[mat]) {tradeNet[mat] = 0;}
					tradeNet[mat] -= materials[mat] * amt;
				}

				let meanOutput = tradeManager.getAverageTrade(race);
				for (let out in meanOutput) {
					let res = craftManager.getResource(out);
					if (!tradeNet[out]) {tradeNet[out] = 0;}
					tradeNet[out] += (res.maxValue > 0) ? Math.min(meanOutput[out] * amt, Math.max(res.maxValue - res.value, 0)) : meanOutput[out] * amt;
				}
			}

			cacheManager.pushToCache({'materials': tradeNet});

			if (resPercent('gold') >= 0.98) {
				optionTrade.cache = true;
			}

			for (let name in tradesDone) {
				if (tradesDone[name] > 0) {
					tradeManager.trade(name, tradesDone[name]);
				}
			}
		},
		miscOptions: function () {
			const craftManager = this.craftManager;
			const buildManager = this.buildManager;
			const optionVals = options.auto.options.items;
			let refreshRequired = 0;

			AutoEmbassy:
			if (optionVals.buildEmbassies.enabled && !!game.diplomacy.races[0].embassyPrices) {
				let culture = craftManager.getResource('culture');
				let cultureTri = culture.value / culture.maxValue;
				let subTrigger = optionVals.buildEmbassies.subTrigger;
				let b = !subTrigger || cultureTri >= 0.98;
				if (optionVals.buildEmbassies.subTrigger <= cultureTri && cultureTri < 2) {
					let i, name, race, emBulk;
					const racePanels = game["diplomacyTab"].racePanels;
					let cultureVal = craftManager.getValueAvailable('culture', true);

					const embassyBulk = {};
					const bulkTracker = [];

					const racesLength = racePanels.length - ((game.diplomacy.get('leviathans').unlocked) ? 1 : 0);
					let tradeItem = options.auto.trade.items;
					for (i = racesLength - 1; i > -1; i--) {
						if (!racePanels[i].embassyButton) {
							game["diplomacyTab"].render();
							continue;
						}
						name = racePanels[i].race.name;
						race = game.diplomacy.get(name);
						if (!b && !tradeItem[name].enabled) {continue;}
						let priceCoeficient = 1 - game.getEffect("embassyCostReduction");
						embassyBulk[name] = {'val': 0, 'basePrice': race.embassyPrices[0].val * priceCoeficient, 'currentEm': race.embassyLevel, 'priceSum': 0, 'race': race};
						bulkTracker.push(name);
					}

					if (bulkTracker.length === 0) {break AutoEmbassy;}

					while (bulkTracker.length > 0) {
						for (i = 0; i < bulkTracker.length; i++) {
							name = bulkTracker[i];
							emBulk = embassyBulk[name];
							let embassyVal = emBulk.currentEm + emBulk.val;
							let nextPrice = emBulk.basePrice * Math.pow(1.15, embassyVal + game.getEffect("embassyFakeBought"));
							embassyVal = b || (embassyVal < 15 && game.science.get('astronomy').researched);
							if (nextPrice <= cultureVal && embassyVal) {
								cultureVal -= nextPrice;
								emBulk.priceSum += nextPrice;
								emBulk.val += 1;
								if (b) {
									bulkTracker.splice(i, 1);
									i--;
								}
							} else {
								bulkTracker.splice(i, 1);
								i--;
							}
						}
					}

					for (name in embassyBulk) {
						emBulk = embassyBulk[name];
						if (emBulk.val === 0) {continue;}
						cultureVal = craftManager.getValueAvailable('culture', true);
						if (emBulk.priceSum > cultureVal) {continue;}
						game.resPool.resources[13].value -= emBulk.priceSum;
						emBulk.race.embassyLevel += emBulk.val;
						storeForSummary('embassy', emBulk.val);
						refreshRequired += 1;
						if (emBulk.val === 1) {
							activity(i18n('build.embassy', [emBulk.val, emBulk.race.title]), 'ks-embassy');
						} else {
							activity(i18n('build.embassies', [emBulk.val, emBulk.race.title]), 'ks-embassy');
						}
					}
				}
			}

			// fix Cryochamber
			if (optionVals.fixCry.enabled && game.time.getVSU("usedCryochambers").val > 0) {
				let fixed = 0;
				const btn = game["timeTab"].vsPanel.children[0].children[0]; //check?
				// buyItem will check resources
				while (btn.controller.buyItem(btn.model, {}, function() {})) {
					fixed += 1;
				}
				if (fixed > 0) {
					iactivity('act.fix.cry', [fixed], 'ks-fixCry');
					storeForSummary('fix.cry', fixed);
				}
			}

			let msg = (name, number) => {
				activity(i18n('summary.' + name, [number]));
				storeForSummary(name, number);
			};
			let mint = game.bld.getBuildingExt('mint').meta;
			if (mint.on && resMap['manpower'].maxValue < 2e4 && !game.opts.enableRedshift && !game.challenges.isActive("pacifism")) {
				mint.on = 0;
				msg('mint');
			}
			if (mint.on !== mint.val && resMap['manpower'].maxValue > 2e4) {
				mint.on = mint.val;
			}
			// auto turn on steamworks
			if (game.village.maxKittens > 130 || game.stats.getStat("totalResets").val > 0) {
				let button;
				// 自动打开蒸汽工房
				let st = game.bld.getBuildingExt('steamworks').meta;
				let ma = game.bld.getBuildingExt('magneto').meta;
				if (st.val && st.on !== st.val && ma.on > 8) {
					button = buildManager.getBuildButton('steamworks');
					button.controller.onAll(button.model);
					msg('steamworks');
				}
				// 自动打开反应堆
				let re = game.bld.getBuildingExt('reactor').meta;
				let ur = game.getResourcePerTick("uranium",true);
				if (re.val && re.on !== re.val && ur > 0) {
					button = buildManager.getBuildButton('reactor');
					button.controller.onAll(button.model);
					msg('reactor');
				}
				// 自动打开工厂
				let fa = game.bld.getBuildingExt('factory').meta;
				if (fa.val && fa.on !== fa.val && game.workshop.get('spaceManufacturing').researched) {
					button = buildManager.getBuildButton('factory');
					button.controller.onAll(button.model);
					msg('factory');
				}
				// 自动打开时空加速器自动化
				let timeA = game.time.getCFU("temporalAccelerator");
				if (timeA.on && game.time.testShatter === 0){
					timeA.isAutomationEnabled = true;
					game.time.testShatter = 1;
					msg('temporalAccelerator');
				}
				// 缺电
				let winterProd = (game.calendar.season === 1) ? game.resPool.energyProd : game.resPool.energyWinterProd;
				let biolab = game.bld.getBuildingExt('biolab').meta;
				let biofuel = biolab.on && game.workshop.get('biofuel').researched;
				let catnipTick = options.auto.distribute.religion || craftManager.getPotentialCatnip() < 0;
				if (biofuel && catnipTick) {biolab.on = 0;}
				if (winterProd && winterProd < game.resPool.energyCons) {
					if (biofuel && biolab.on) {
						let msg = '冬季产出电:' + game.getDisplayValueExt(winterProd) + '，冬季消耗电:' + game.getDisplayValueExt(game.resPool.energyCons) + '，小猫担心电不够并关闭了';
						let number = biolab.on;
						iactivity('summary.biolab.test', [msg + number]);
						biolab.on = 0;
						storeForSummary('biolab.test', msg + number);
						return 1;
					}
					let oilWell = game.bld.getBuildingExt('oilWell').meta;
					if (oilWell.isAutomationEnabled && game.workshop.get('pumpjack').researched) {
						oilWell.isAutomationEnabled = false;
						game.upgrade({buildings: ['oilWell']});
						msg('pumpjack', 1);
						return 1;
					}
					let accelerator = game.bld.getBuildingExt('accelerator').meta;
					if (accelerator.on) {
						accelerator.on = 0;
						msg('accelerator', 1);
					}
				}
				// 自动控制 时间操纵 酿酒厂 开关
				const list = [{
					name: 'brewery',
					metadata: game.bld.get('brewery'),
					Button: buildManager.getBuildButton('brewery'),
					conditionOn: game.calendar.festivalDays,
					conditionOff: game.bld.get('brewery').on,
				}];
				if (!game.opts.enableRedshift) {
					// 开启离线进度时不调整时间操纵
					list.push({
						name: 'chronocontrol',
						metadata: game.time.getVSU('chronocontrol'),
						Button: this.timeManager.getBuildButton('chronocontrol'),
						conditionOn: game.calendar.futureSeasonTemporalParadox < 1 && game.calendar.day > 98,
						conditionOff: game.time.getVSU('chronocontrol').on && game.calendar.day > 0,
					});
					let calciner = game.bld.getBuildingExt('calciner').meta;
					if (!game.time.getCFU("ressourceRetrieval").on && calciner.isAutomationEnabled) {
						calciner.isAutomationEnabled = false;
						game.upgrade({buildings: ['calciner']});
						msg('calciner');
					}
				}
				for (let index = 0; index < list.length; index++) {
					let element = list[index];
					if (element.metadata.val > 0) {
						if (element.conditionOn) {
							let off = element.metadata.val - element.metadata.on;
							if (off) {
								element.Button.controller.onAll(element.Button.model);
								iactivity('summary.' + element.name + 'On');
								storeForSummary(element.name);
							}
						} else if (element.conditionOff) {
							element.Button.controller.offAll(element.Button.model);
							iactivity('summary.' + element.name + 'Off');
							storeForSummary(element.name);
						}
					}
				}
			}
			return refreshRequired;
		},
		gameUpgrade: function () {
			let auto = options.auto;
			let upgrades = auto.upgrade.items.upgrades;
			let cache = auto.cache;
			let list = cache.upgrade;
			if (list) {
				game.upgrade(list);
				for (let i in list) {
					delete list[i];
				}
				cache.upgrade = null;
			} else {
				game.updateCaches();
			}
			if (upgrades.update) {
				game.updateCaches();
				upgrades.update = null;
			}
		},
		setTrait: function (trait) {
			let vLeader = game.village.leader;
			if (trait) {
				if (game.science.get('civil').researched && vLeader && !game.challenges.isActive("anarchy")) {
					let cache = options.auto.cache;
					let hasTrait = game.village.traits.some(obj => obj.name === trait);
					if (!cache.trait[trait]) {
						if (hasTrait) {
							cache.trait[trait] = true;
							let traitDesc = $I('village.bonus.desc.' + trait);
							let leaderMsg = ['当' + traitDesc.slice(0,2) + "项目时" + $I('village.trait.' + trait) + "猫猫自觉顶替当前领袖，其效果为" + traitDesc];
							if (game.ticks > 1e4) {
								msgSummary('leader',true);
							} else {
								msgSummary('leader', '', 'ks-leader');
							}
							iactivity('set.leader', [leaderMsg], 'ks-leader');
						}
					}
					if (!options.copyTrait) {
						let traitName = vLeader.trait.name;
						options.copyTrait = traitName;
						cache.trait[traitName] = true;
					}
					if (!hasTrait) {cache.trait[trait] = false;}
					if (hasTrait || options.copyTrait === trait) {vLeader.trait.name = trait;}
				}
			} else if (options.copyTrait && vLeader) {
				if ($I('village.trait.' + options.copyTrait) === vLeader.trait.title) {
					vLeader.trait.name = options.copyTrait;
					options.copyTrait = undefined;
				}
			}
		},
		skipCtrlRes: function () {
			let addCraft = options.auto.timeCtrl.items.timeSkip;
			if (addCraft.craft) {return;}
			const resList = ['catnip', 'coal', 'iron', 'oil', 'uranium', 'science'];
			let i, name = '';
			for (i = 0; i < resList.length; i++) {
				let res = resMap[resList[i]];
				let resource = options.auto.resources[res.name];
				if (!resource) {
					resource = {};
					resource.enabled = true;
					resource.stock = 0;
					$('#toggle-list-resources').append(addNewResourceOption(res.name, res.title, false));
				}
				resource.consume = 1;
				name = name + '' + res.title + '，';
			}
			addCraft.craft = true;
			iactivity('summary.resource', [name]);
			storeForSummary('resource');
		},
		catnipForReligion: function (isTranscend) {
			let value = isTranscend || 0;
			let catnipTick = 1;
			let transcendenceReached = game.religion.getRU("transcendence").on;
			let tt = transcendenceReached ? game.religion.transcendenceTier : 0;
			if (value) {
				tt += 1;
			}
			let epiphany = game.religion.faithRatio;
			let epiphanyInc = game.religion.faith / 1000000 * (tt + 1) * (tt + 1) * 1.01;
			let epiphanyAfterAdore = epiphany + epiphanyInc - value;
			let worshipAfterAdore = 0.01 + game.resPool.get('faith').value * (1 + game.getUnlimitedDR(epiphanyAfterAdore, 0.1) * 0.1);
			let solarRevolutionAdterAdore = game.getLimitedDR(game.getUnlimitedDR(worshipAfterAdore, 1000) / 100, 10 + game.getEffect("solarRevolutionLimit"));
			if (tt < 10) {
				catnipTick = game.village.getResConsumption()['catnip'] * (1 + game.getEffect("catnipDemandRatio"));
				if (game.village.sim.kittens.length > 0 && game.village.happiness > 1) {
					catnipTick += catnipTick * Math.max(game.village.happiness * (1 + game.getEffect("hapinnessConsumptionRatio")) - 1, 0) * (1 + game.getEffect("catnipDemandWorkerRatioGlobal"));
				}
				let solarRevolutionRatio = 1 + game.religion.getSolarRevolutionRatio() * (1 + game.bld.pollutionEffects["solarRevolutionPollution"]);
				catnipTick = ((game.resPool.get('catnip').perTickCached - catnipTick) * (1 + solarRevolutionAdterAdore) / solarRevolutionRatio) + catnipTick + game.globalEffectsCached.catnipPerTickCon;
			}
			if (catnipTick < 0) {
				let optionFaith = options.auto.faith;
				if (!options.auto.distribute.religion) {
					options.auto.distribute.religion = true;
				}
				// 次元超越猫薄荷
				if (value) {
					iactivity('summary.transcend.catnip', [game.getDisplayValueExt(catnipTick * 5)]);
					activitySummary.other['transcend.catnip'] = catnipTick * 5;
				}
				// 赞美群星猫薄荷
				if (!value) {
					iactivity('summary.adore.catnip', [game.getDisplayValueExt(catnipTick * 5)]);
					activitySummary.other['adore.catnip'] = catnipTick * 5;
				}
			}

			return catnipTick;
		},
		// ref: https://github.com/Bioniclegenius/NummonCalc/blob/112f716e2fde9956dfe520021b0400cba7b7113e/NummonCalc.js#L490
		getBestUnicornBuilding: function () {
			let pastureMeta = game.bld.getBuildingExt('unicornPasture').meta;
			if (!pastureMeta.unlocked) {return;}

			let bestAmoritization = Infinity;
			let bestBuilding = '';
			let goldReduce = 1 - game.getEffect('goldCostReduction');

			let zig = game.bld.getBuildingExt('ziggurat').meta.on;
			let onZig = Math.max(zig, 1);

			let religionRatio = game.getEffect('unicornsRatioReligion') + 1;
			let baseUnicornsPerRift = 500 * (0.9 + religionRatio * 0.1);
			let riftChanceRatio = (game.prestige.getPerk('unicornmancy').researched) ? 1.1 : 1;
			let baseRift = game.getEffect('riftChance') * riftChanceRatio / 2e4 * baseUnicornsPerRift;

			let title = 'unicorns';
			let unicornsMap = resMap['unicorns'];
			let unicornsTick = unicornsMap.perTickCached;
			let festival = game.calendar.cycleEffectsFestival({
				unicorns: 1
			})['unicorns'];
			let total = unicornsMap.perTickCached * game.getTicksPerSecondUI() / festival;
			if (!total) {return pastureMeta;}
			let pastureAmor = total / Math.max(1, pastureMeta.val);
			pastureAmor = 2 * Math.pow(pastureMeta.priceRatio + game.getEffect("priceRatio"), pastureMeta.val) / pastureAmor;

			let ivory = resMap['tears'].value + unicornsMap.value * 2500 / onZig > resMap['ivory'].value;
			let fa = 1.5 * game.prestige.getParagonProductionRatio() + 1.5;
			ivory |= resMap['ivory'].perTickCached * fa *festival < unicornsTick;
			let res = 'tears';
			if (ivory && resMap['alicorn'].value) {
				res = 'ivory';
				title = 'ivory';
			}
			pastureAmor = ivory ? pastureAmor * 3e3 : pastureAmor;
			if (pastureAmor < bestAmoritization) {
				bestAmoritization = pastureAmor;
				bestBuilding = pastureMeta;
			}
			unicorn:
			for (let i = 0; i < 6; i ++) {
				let btn = game.religion.meta[0].meta[i];
				if (btn.unlocked) {
					let unicornPrice = 0;
					let relBonus = religionRatio;
					if (!btn.effects['unicornsRatioReligion']) {continue;}
					if (ivory && !btn.effects['alicornChance']) {continue;}
					let an = Math.pow(1.15, btn.on);
					for (let j = 0; j < btn.prices.length; j++) {
						let price = btn.prices[j];
						if (price.name === res) {
							unicornPrice += price.val * an * 2500 / onZig;
							relBonus += btn.effects['unicornsRatioReligion'];
						}
						if (price.name === 'gold' && price.val * goldReduce * an > resMap['gold'].maxValue) {continue unicorn;}
					}
					let riftChance = game.getEffect('riftChance');
					let effects = btn.effects;
					if (effects.riftChance) {riftChance += effects.riftChance;}
					let unicornsPerRift = 50 * relBonus + 450;
					let riftBonus = riftChance * riftChanceRatio / 2e4 * unicornsPerRift;
					riftBonus -= baseRift;
					let amor = total * relBonus / religionRatio;
					amor -= total;
					amor += riftBonus;
					amor = unicornPrice / amor;
					if (effects.tcRefineRatio && ivory) {amor *= 0.5 - effects.tcRefineRatio;}
					if (amor < bestAmoritization) {
						bestAmoritization = amor;
						bestBuilding = btn;
					}
				}
			}
			if (zig) {
				let name = bestBuilding.label || "独角兽牧场";
				name += '(' + i18n('$resources.' + title + '.title') +  '性价比)';
				if (activitySummary.other['auto.unicorn'] !== name) {
					activitySummary.other['auto.unicorn'] = name;
					iactivity('summary.auto.unicorn', [name], 'ks-sacrifice');
				}
			}
			return bestBuilding;
		}
	};

	// Tab Manager
	// ===========

	let TabManager = function (name) {
		this.setTab(name);
	};

	TabManager.prototype = {
		tab: undefined,
		render: function () {
			if (this.tab && game.ui.activeTabId !== this.tab.tabId && !this.tab._inherited) {
				this.tab.render();
			}
		},
		setTab: function (name) {
			for (const tab in game.tabs) {
				if (game.tabs[tab].tabId === name) {
					this.tab = game.tabs[tab];
					break;
				}
			}

			this.tab ? this.render() : warning('unable to find tab ' + name);
		}
	};

	// Religion manager
	// ================

	let ReligionManager = function () {
		this.manager = new TabManager('Religion');
		//this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	ReligionManager.prototype = {
		manager: undefined,
		//crafts: undefined,
		bulkManager: undefined,
		build: function (name, variant, amount) {
			let build = this.getBuild(name, variant);
			let button = this.getBuildButton(name, variant);

			if (!button || !button.model.metadata) {return game["religionTab"].render();}

			if (!button.model.enabled) {
				button.model.prices = button.controller.getPrices(button.model);
				button.controller.updateEnabled(button.model);
				if (!button.model.enabled) {return;}
			}

			//var amountTemp = amount;
			amount = this.bulkManager.construct(button.model, button, amount);
			//if (amount !== amountTemp) {
			//    warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
			//}

			if (amount === 0) {return;}
			game.stats.getStat("totalClicks").val += 1;

			let label = build.label;
			if (variant === "s") {
				if (options.auto.cache.trait['wise']) {
					storeForSummary('哲学家小猫祷告了 ' + label, amount, 'faith');
					return iactivity('act.sun.discovers.leader', [label, amount], 'ks-faith');
				}
				if (amount === 1) {
					iactivity('act.sun.discover', [label], 'ks-faith');
				} else {
					iactivity('act.sun.discovers', [label, amount], 'ks-faith');
				}
				storeForSummary('小猫祷告了 ' + label, amount, 'faith');
			} else {
				storeForSummary(label, amount, 'build');
				if (amount === 1) {
					iactivity('act.build', [label], 'ks-build');
				} else {
					iactivity('act.builds', [label, amount], 'ks-build');
				}
			}
		},
		getBuild: function (name, variant) {
			switch (variant) {
				case 'z':
					return game.religion.getZU(name);
				case 's':
					return game.religion.getRU(name);
				case 'c':
					return game.religion.getTU(name);
			}
		},
		getBuildButton: function (name, variant) {
			let buttons, i, haystack;
			switch (variant) {
				case 'z':
					buttons = this.manager.tab.zgUpgradeButtons;
					break;
				case 's':
					buttons = this.manager.tab.rUpgradeButtons;
					break;
				case 'c':
					buttons = this.manager.tab.children[0].children[0].children;
			}
			let build = this.getBuild(name, variant);
			for (i = 0; i < buttons.length; i++) {
				if (!buttons[i]) {continue;}
				haystack = buttons[i].model.name;
				if (haystack.indexOf(build.label) !== -1) {
					return buttons[i];
				}
			}
		}
	};

	// Time manager
	// ============

	let TimeManager = function () {
		this.manager = new TabManager('Time');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	TimeManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		build: function (name, variant, amount) {
			let build = this.getBuild(name, variant);
			let button = this.getBuildButton(name, variant);

			if (!button || !button.model.metadata) {return game["timeTab"].render();}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			let amountTemp = amount;
			let label = build.label;
			amount = this.bulkManager.construct(button.model, button, amount);
			if (amount !== amountTemp) {warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);}
			storeForSummary(label, amount, 'build');

			if (amount === 1) {
				iactivity('act.build', [label], 'ks-build');
			} else {
				iactivity('act.builds', [label, amount], 'ks-build');
			}
		},
		getBuild: function (name, variant) {
			if (variant === 'chrono') {
				return game.time.getCFU(name);
			} else {
				return game.time.getVSU(name);
			}
		},
		getBuildButton: function (name, variant) {
			let buttons;
			if (variant === 'chrono') {
				buttons = this.manager.tab.children[2].children[0].children;
			} else {
				buttons = this.manager.tab.children[3].children[0].children;
			}
			const build = this.getBuild(name, variant);
			for (let i in buttons) {
				let haystack = buttons[i].model.name;
				if (haystack.indexOf(build.label) !== -1) {
					return buttons[i];
				}
			}
		}
	};

	// Upgrade manager
	// ============

	let UpgradeManager = function () {
		this.workManager = new TabManager('Workshop');
		this.sciManager = new TabManager('Science');
		this.crafts = new CraftManager();
	};

	UpgradeManager.prototype = {
		manager: undefined,
		crafts: undefined,
		build: function (upgrade, variant) {
			let i;
			const button = this.getBuildButton(upgrade, variant);
			if (!button || !button.model.metadata) {
				if (variant === 'workshop') {
					game['workshopTab'].render();
				} else {
					game["libraryTab"].render();
				}
				return;
			}
			if (!button.model.enabled) {
				button.model.prices = button.controller.getPrices(button.model);
				button.controller.updateEnabled(button.model);
				if (!button.model.enabled) {
					return;
				}
			}

			if (variant === 'policy') {
				let metaData = button.model.metadata;
				if (game.village.leader && metaData.requiredLeaderJob && game.village.leader.job !== metaData.requiredLeaderJob){
					let jobTitle = game.village.getJob(metaData.requiredLeaderJob).title;
					game.msg($I("msg.policy.wrongLeaderJobForResearch", [metaData.label, jobTitle]), "important");
					return;
				} else if (metaData.name === "transkittenism" && game.bld.getBuildingExt("aiCore").meta.effects["aiLevel"] >= 15){
					game.msg($I("msg.policy.aiNotMerges"),"alert", "ai");
					return;
				} else if (metaData.blocked === false) {
					for(i = 0; i < metaData.blocks.length; i++){
						if(game.science.getPolicy(metaData.blocks[i]).researched){
							metaData.blocked = true;
							return;
						}
					}
				}
			}

			let itemsUpgrades = options.auto.upgrade.items.upgrades;
			//need to simulate a click so the game updates everything properly
			button.model.prices = button.controller.getPrices(button.model);
			button.controller.payPrice(button.model, {}, function() {});
			//button.controller.onPurchase(button.model, {}, function() {});
			let meta = button.model.metadata;
			meta.researched = true;
			if (meta.handler) {meta.handler(game, meta);}
			if (meta.unlocks) {game.unlock(meta.unlocks);}
			if (meta.blocks) {
				for (i in meta.blocks) {
					let policy = game.science.getPolicy(meta.blocks[i]);
					policy.blocked = true;
				}
			}
			if (meta.onResearch) {meta.onResearch(game);}
			if (meta.upgrades) {
				if (variant === 'workshop' && !itemsUpgrades.update) {itemsUpgrades.update = true;}
				cacheUpgrades(meta);
			}

			game.stats.getStat("totalClicks").val += 1;

			let label = upgrade.label;
			let scientist = options.auto.cache.trait['scientist'];
			let leader = (scientist) ? '科学家小猫' : '小猫';
			scientist = (scientist) ? 1 : 0;
			if (variant === 'workshop') {
				storeForSummary(label, scientist, 'upgrade');
				iactivity('upgrade.upgrade', [label, leader], 'ks-upgrade');
				let name = upgrade.name;
				if (name === itemsUpgrades.cache) {
					itemsUpgrades.cache = false;
					let Upg = options.auto.cache.resUpg;
					for (let i in options.auto.cache.resUpg) {
						delete Upg[i];
					}
				}
			} else if (variant === 'science') {
				storeForSummary(label, scientist, 'research');
				iactivity('upgrade.tech', [label, leader], 'ks-research');
			} else if (variant === 'policy') {
				iactivity('upgrade.policy', [label], 'ks-policy');
			}
		},
		getValue: function (name, upgrade) {
			let res = options.auto.resources[name];
			switch(upgrade) {
				case 'oxidation':
					res = null;
					break;
			}
			let stock = (res && res.enabled) ? res.stock : 0;
			let cache = options.auto.upgrade.items.upgrades.cache;
			if (name === 'titanium' && upgrade !== 'rotaryKiln') {
				if (upgrade !== 'rotaryKiln') {
					if (!game.workshop.metaCache['rotaryKiln'].researched && game.workshop.get('orbitalGeodesy').researched) {stock += 5000;}
				}
				if (cache === 'orbitalGeodesy' && cache !== upgrade) {stock += 1e3;}
			}
			if (name === 'iron' && upgrade !== 'ironwood') {
				if (activitySummary.other['auto.ironwood']) {stock += 3000;}
			}
			if (name === 'alloy') {
				if (cache && cache !== upgrade) {stock += options.auto.cache.resUpg[name];}
			}
			if (name === 'oil') {
				if (upgrade !== 'orbitalGeodesy' && game.bld.get('calciner').val > 20 && !game.workshop.metaCache['orbitalGeodesy'].researched) {
					stock += 35e3;
				}
			}
			return Math.max(resMap[name].value - stock, 0);
		},
		getBuildButton: function (upgrade, variant) {
			let buttons;
			if (variant === 'workshop') {
				buttons = this.workManager.tab.buttons;
			} else if (variant === 'science') {
				buttons = this.sciManager.tab.buttons;
			} else if (variant === 'policy') {
				buttons = this.sciManager.tab.policyPanel.children;
			}
			for (let i of buttons) {
				let haystack = i.model.name;
				if (haystack === upgrade.label) {
					return i;
				}
			}
		}
	};

	// Building manager
	// ================

	let BuildManager = function () {
		this.manager = new TabManager('Bonfire');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	BuildManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		build: function (name, stage, amount) {
			let build = this.getBuild(name);
			let button = this.getBuildButton(name, stage);

			if (!build.meta.unlocked) {return;}
			if (!button || !button.model.metadata) {
				game["bldTab"].activeGroup = 'all';
				if (!button || !button.model.metadata) {return game["bldTab"].render();}
			}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			//var amountTemp = amount;
			let label = build.meta.label ? build.meta.label : build.meta.stages[stage].label;
			amount = this.bulkManager.construct(button.model, button, amount);
			//if (amount !== amountTemp) {/*warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);*/}
			if (amount === 0) {return;}
			storeForSummary(label, amount, 'build');
			game.stats.getStat("totalClicks").val += 1;

			if (amount === 1) {
				iactivity('act.build', [label], 'ks-build');
			} else{
				iactivity('act.builds', [label, amount], 'ks-build');
			}
		},
		count: function(id, count) {
			if (!count) {return;}
			let halfCount;
			let geodesy = game.workshop.get('geodesy').researched;
			let orbitalGeodesy = game.workshop.get('orbitalGeodesy').researched;
			let atheism = game.challenges.isActive('atheism');
			let solarMeta = game.religion.getRU('solarRevolution');
			let spaceManufacturing = game.workshop.get('spaceManufacturing').researched;
			let vitruvianFeline = game.prestige.getPerk('vitruvianFeline').researched;
			let mineralsCap = (resMap['minerals'].value > resMap['minerals'].maxValue * 0.94);
			let woodCap = (resMap['wood'].value > resMap['wood'].maxValue * 0.94);
			let TitaniumCap = (resMap['titanium'].value >= 0.95 * resMap['titanium'].maxValue);
			let scienceMetaCache = game.science.metaCache;
			let catnipTick = this.crafts.getPotentialCatnip(false);
			let amphitheatre = game.bld.getBuildingExt('amphitheatre').meta;
			let moonM = game.space.getProgram('moonMission');
			switch (id) {
				case 'calciner':
					if (resMap['starchart'].value > 500 && !moonM.val && moonM.unlocked && resMap['titanium'].value > 5e3) {halfCount = true;}
					break;
				//case 'observatory':
				//	if (id == 'observatory' && game.challenges.isActive("blackSky") && resMap['science'].maxValue > 5e5 && !spaceManufacturing) {
				//		count = 0;
				//	}
				//	break;
				case 'aqueduct':
					if (catnipTick < 2 || game.challenges.isActive('winterIsComing')) {break;}
					else {count = Math.floor(count * 0.4);}
				// falls through
				case 'library':
					if (id === 'library' && !scienceMetaCache['writing'].unlocked) {break;}
				// falls through
				case 'academy':
				case 'pasture':
				case 'barn':
					if (id === 'barn' && resMap['minerals'].maxValue < 1600) {break;}
					if (mineralsCap && woodCap) {break;}
				// falls through
				case 'warehouse':
					if (id === 'warehouse') {
						if (resMap['minerals'].maxValue < 5e4) {
							if (game.workshop.get('deepMining').researched || game.bld.getBuildingExt(id).meta.val < 20) {break;}
						}
						else if (vitruvianFeline) {count = Math.floor(count * 0.3);}
					}
				// falls through
				case 'lumberMill':
					if (id === 'lumberMill') {
						if (game.bld.getBuildingExt(id).meta.val < 35) {
							if (!game.getEffect('lumberMillRatio') && game.bld.getEffect('woodRatio') > 3.1 && resMap['iron'].maxValue > 1200) {
								count = 0;
							}
							if (resMap['gold'].value || game.getEffect('ironPerTickAutoprod') < 0.3) {
								break;
							}
						} else if (!spaceManufacturing) {
							halfCount = true;
						}
					}
				// falls through
				case 'oilWell':
					if (id === 'oilWell') {
						if (game.bld.getBuildingExt(id).meta.val < 8) {break;}
						if (resMap['oil'].maxValue > 55e3 && resMap['oil'].value > 2e4) {count = Math.floor(count * 0.5);}
						if (game.bld.getBuildingExt('calciner').meta.val > 20 && !orbitalGeodesy) {break;}
					}
				// falls through
				case 'chapel':
					if (id === 'chapel') {
						if (game.bld.getBuildingExt(id).meta.val < 20) {
							break;
						} else {
							if (!game.calendar.festivalDays) {
								count = 0;
							}
							break;
						}
					}
				// falls through
				case 'quarry' :
					if (vitruvianFeline) {
						if (!orbitalGeodesy && game.bld.get(id).val) {
							halfCount = true;
							msgSummary('lower');
						} else if (orbitalGeodesy) {msgSummary('lower', true);}
					}
					break;
				case 'harbor':
					if (id === 'harbor') {
						if (game.bld.getBuildingExt(id).meta.val < 8){
							msgSummary('harbor');
							halfCount = true;
						} else if (game.space.getBuilding('sattelite').val < 3 && game.religion.getSolarRevolutionRatio() > 7.5) {halfCount = true;}
						else if (!orbitalGeodesy && !game.workshop.get('geodesy').researched) {halfCount = true;}
						else if (spaceManufacturing) {msgSummary('harbor', true);}
					}
					break;
				case 'logHouse':
					if (!amphitheatre.stage && amphitheatre.val < 5 && game.village.happiness > 2 && game.village.maxKittens > 20) {halfCount = true;}
					break;
				case 'biolab':
					if (!spaceManufacturing) {
						count = 1;
					}
					break;
				case 'factory':
					if (!vitruvianFeline) {break;}
					if (spaceManufacturing) {
						if (!game.space.getBuilding('sattelite').val && game.bld.get(id).val) {
							count = 0;
						}
					} else {
						if (resMap['titanium'].maxValue < 1.3e5 && game.bld.get(id).val) {count = 0;}
						if (game.bld.get(id).val > 2 && !TitaniumCap && !geodesy) {
							count = Math.floor(count * 0.5);
							halfCount = true;
						}
					}
					break;
				// falls through
				case 'accelerator':
					if (!vitruvianFeline) {break;}
					if (!game.workshop.get('energyRifts').researched) {
						count = 0;
					}
					if (!spaceManufacturing && resMap['titanium'].maxValue > 1.3e5) {
						count = 0;
					}
					break;
				// falls through
				case 'mansion':
					vitruvianFeline = (vitruvianFeline || (!vitruvianFeline && game.workshop.get('orbitalGeodesy').researched && id === 'mansion'));
					if (!spaceManufacturing && game.stats.getStat("totalResets").val > 1 && !TitaniumCap && vitruvianFeline) {
						halfCount = true;
					}
					if (resMap['starchart'].perTickCached < 4 && id === 'mansion' && !TitaniumCap && vitruvianFeline) {
						halfCount = true;
					}
					break;
			}
			if (halfCount) {
				count = Math.floor(count * 0.5);
			} else if (!solarMeta.on && !atheism) {
				count = Math.ceil(count * 0.5);
			}
			catnipTick = catnipTick < 0.85 && resMap['catnip'].value / Math.abs(catnipTick) < 1000;
			catnipTick &= resMap['kittens'].value > 2 && options.auto.distribute.items.farmer.enabled;
			if ((id === 'hut' || id === 'logHouse') && count) {
				if (catnipTick) {
					count = 0;
					msgSummary('kittens');
				} else {msgSummary('kittens', true);}
			}
			return count;
		},
		getBuild: function (name) {
			return game.bld.getBuildingExt(name);
		},
		getBuildButton: function (name, stage) {
			let buttons = this.manager.tab.children;
			let build = this.getBuild(name);
			let label = typeof stage === 'undefined' ? build.meta.label : build.meta.stages[stage].label;

			for (const i in buttons) {
				let haystack = buttons[i].model.name;
				if (haystack.indexOf(label) !== -1){
					return buttons[i];
				}
			}
		},
		getSumPrices: function (build, price) {
			let currentRatio = (build.priceRatio) ? build.priceRatio : build.stages[build.stage].priceRatio;
			let buildRatio = currentRatio + game.getEffect("priceRatio");
			return (price.val - price.val * Math.pow(buildRatio, build.val - 1)) / (1 - buildRatio);
		},
		sellBuild: function (name) {
			let build = this.getBuild(name).meta;
			let prices = build.stages[build.stage].prices;
			for(let i = 0; i < prices.length; i++){
				let price = prices[i];
				let res = game.resPool.get(price.name);
				if (res.isRefundable() && !price.isTemporary && build.val) {
					let sumPrices = this.getSumPrices(build, price);
					game.resPool.addResEvent(price.name, sumPrices * 0.5);
				}
			}
			build.on = 0;
			build.val = 0;
		}
	};

	// Space manager
	// ================

	let SpaceManager = function () {
		this.manager = new TabManager('Space');
		this.crafts = new CraftManager();
		this.bulkManager = new BulkManager();
	};

	SpaceManager.prototype = {
		manager: undefined,
		crafts: undefined,
		bulkManager: undefined,
		build: function (name, amount) {
			let build = this.getBuild(name);
			let button = this.getBuildButton(name);

			if (!build.unlocked || !options.auto.space.items[name].enabled) {return;}
			if (!button || !button.model.metadata) {return game["spaceTab"].render();}
			if (!button.model.enabled) {return button.controller.updateEnabled(button.model);}

			let amountTemp = amount;
			let label = build.label;
			amount = this.bulkManager.construct(button.model, button, amount);
			if (amount === 0) {
				return;
				//warning(label + ' Amount ordered: ' + amountTemp + ' Amount Constructed: ' + amount);
			}
			storeForSummary(label, amount, 'build');
			game.stats.getStat("totalClicks").val += 1;

			if (amount === 1) {
				iactivity('act.build', [label], 'ks-build');
			} else {
				iactivity('act.builds', [label, amount], 'ks-build');
			}
		},
		getBuild: function (name) {
			return game.space.getBuilding(name);
		},
		getBuildButton: function (name) {
			const panels = this.manager.tab.planetPanels;

			for (const panel in panels) {
				for (let child in panels[panel].children) {
					if (panels[panel].children[child].id === name) {return panels[panel].children[child];}
				}
			}
		}
	};

	// Crafting Manager
	// ================

	let CraftManager = function () {
		this.cacheManager = new CacheManager();
	};

	CraftManager.prototype = {
		craft: function (name, amount) {
			amount = Math.floor(amount);

			if (!name || amount < 1) {return;}
			if (!this.canCraft(name, amount)) {return;}

			let craft = this.getCraft(name);
			let ratio = game.getResCraftRatio(craft.name) + 1;
			let trait = options.auto.cache.trait['engineer'] && game.village.leader;
			let leader = (trait) ? '工匠小猫制作了 ' : '小猫制作了 ';

			//game.workshop.craft(craft.name, amount, true, false);
			amount = Math.ceil(amount);
			let craftAmt = amount * ratio;
			let prices = dojo.clone(game.workshop.getCraftPrice(craft));
			for (let i = prices.length - 1; i >= 0; i--) {
				prices[i].val *= amount;
			}

			if (game.resPool.hasRes(prices)) {
				if (trait) {
					let engineer = game.village.getEffectLeader("engineer", 0);
					if (trait && resMap[name].tag === "metallurgist" && options.auto.cache.trait['metallurgist']) {
						craftAmt += amount * engineer;
						leader = '冶金学家小猫制作了 ';
					}
					if (resMap[name].tag === "chemist" && options.auto.cache.trait['chemist']) {
						craftAmt += 0.5 * amount * engineer;
						leader = '化学家小猫制作了 ';
					}
				}
				game.resPool.payPrices(prices);
				game.resPool.addResEvent(craft.name, craftAmt);
				if (craft.upgrades){
					cacheUpgrades(craft.upgrades);
				}
				game.stats.getStat("totalCrafts").val++;
				game.stats.getStatCurrent("totalCrafts").val++;
				game.stats.getStat("totalClicks").val += 1;
				prices = null;
			} else {
				return;
			}

			let iname = game.resPool.get(name).title;

			// determine actual amount after crafting upgrades
			// amount = (amount * (1 + ratio)).toFixed(2);
			amount = craftAmt;

			if (trait) {storeForSummary(iname, amount, 'craftLeader');}
			else {storeForSummary(iname, amount, 'craft');}
			iactivity('act.craft', [leader + game.getDisplayValueExt(amount), iname], 'ks-craft');
		},
		canCraft: function (name, amount) {
			let craft = this.getCraft(name);
			let result = false;

			if (craft.unlocked) {
				result = true;

				let prices = game.workshop.getCraftPrice(craft);
				for (let i in prices) {
					let price = prices[i];
					let value = resMap[price.name].value;

					if (value < price.val * amount) {
						result = false;
					}
				}
			}

			return result;
		},
		getCraft: function (name) {
			return game.workshop.getCraft(name);
		},
		// singleCraftPossible: function (name) {
		// 	const materials = this.getMaterials(name);
		// 	for (const mat in materials) {
		// 		if (this.getValueAvailable(mat, true) < materials[mat]) {return false;}
		// 	}
		// 	return true;
		// },
		getLowestCraftAmount: function (name, limited, limRat, aboveTrigger) {
			//var amount = Number.MAX_VALUE;
			let autoMax = Number.MAX_VALUE;
			let workshop = game.workshop;
			let materials = this.getMaterials(name);
			// Safeguard if materials for craft cannot be determined.
			if (!materials) {return 0;}

			let resValue = this.getValueAvailable(name, true);
			let i, force, delta;

			let temple = game.bld.get('temple');
			let priceRatio = Math.pow(temple.priceRatio + game.getEffect("priceRatio"), temple.val);
			let renaissance = game.prestige.getPerk('renaissance').researched;

			let craft = this.getCraft(name);
			let ratio = game.getResCraftRatio(craft.name) + 1;
			let trigger = options.auto.craft.trigger;
			let shipValue = resMap['ship'].value;
			if (name === 'ship') {
				force = options.auto.options.enabled && options.auto.options.items.shipOverride.enabled;
				let optionShipVal = options.auto.options.items.shipOverride.subTrigger;
				let geodesy = workshop.get("geodesy").researched;
				let solar = game.religion.getSolarRevolutionRatio();
				geodesy = (geodesy) ? Math.max(243, optionShipVal) : 170 / Math.max(0.9, Math.log(solar));
				optionShipVal = (optionShipVal > 168) ? geodesy : optionShipVal;
				force &=  shipValue < optionShipVal;
				force &= !workshop.get('oxidation').researched && !options.auto.craft.oxidation;
			}

			// 默认数量设为可达无限的最小值
			let amount = Number.MAX_VALUE / ratio + Number.MAX_VALUE / Math.pow(2, 53) / ratio;
			// 跳过资源达到无限的情况
			if (resMap[name].value === Infinity) { return 0; }

			let gScience = game.science;
			let scienceMeta = gScience.meta[0];
			let indexMax;
			let cache = options.auto.cache;
			let msgScience = (name) => {
				let scienceName = (cache.science) ? cache.science : "科学";
				force = true;
				if (scienceName === '油气处理') {return;}
				activity(i18n("craft.force", [resMap[name].title, scienceName]));
				storeForSummary('craft' + ucfirst(name), 1);
			};


			if (name === 'beam' || name === 'slab') {
				options.auto.craft.autoConsume[Object.keys(materials)[0]] = 0;
				if (resMap['scaffold'].value > 500 && trigger > 0.9 && limited) {
					options.auto.craft.autoConsume[Object.keys(materials)[0]] = 1;
				}
			}

			if (name === 'plate' && limited && options.auto.craft.items['steel'].enabled) {
				let coalTick = game.getResourcePerTick('coal', true);
				let coalTri = this.getResource('coal').maxValue * trigger;
				if (coalTick > 0 && resMap['iron'].value !== resMap['iron'].maxValue && resValue > 23) {
					if (this.getValueAvailable('plate') / this.getValueAvailable('steel') > 0.8) {
						let ironInTime = ((coalTri - this.getValue('coal')) / coalTick) * Math.max(game.getResourcePerTick('iron', true), 0);
						autoMax = (this.getValueAvailable('iron') - Math.max(coalTri - ironInTime,0)) / 125;
					}
				}
				if (resMap['faith'].maxValue < 750 && resMap['gold'].value > 30 && resMap[name].value < 23 && ratio > 3) {force = true;}
				if (!shipValue && ratio > 3 && resMap['starchart'].value >= 25 && resValue < 150) {
					autoMax = Math.ceil(Math.min(resMap['iron'].value / 100, (150 - resValue) / ratio));
					force = true;
				}
			}

			let scienceVal = this.getValueAvailable('science', true);
			let scienceTri = resMap['science'].value / resMap['science'].maxValue;
			let cultrueTri = resMap['culture'].value / resMap['culture'].maxValue;
			if (name === 'manuscript' && limited) {
				let cacheManuscript = cache.resources['manuscript'];
				indexMax = (cacheManuscript) ? 17 : 19;
				for (i = 16; i < indexMax; i++) {
					let meta = scienceMeta.meta[i];
					let price = cacheManuscript || meta.prices[1].val;
					if (!meta.researched || cacheManuscript > 0) {
						let buildTemple = (i === 16 && game.village.happiness < 4 && temple.val === 1 && renaissance);
						buildTemple = buildTemple || resMap['faith'].maxValue > 750 || resMap['plate'].value < 15;
						price = (buildTemple) ? price : 10 * priceRatio;
						let craftPrices = (game.science.getPolicy("tradition").researched) ? 20 : 25;
						autoMax = Math.ceil((price - resValue) / ratio);
						let resVal = this.getValueAvailable('parchment', true);
						if (resVal > autoMax * craftPrices && autoMax >= 1 && resMap['culture'].value > craftPrices * 16 * autoMax) {
							cache.science = (cacheManuscript > 0) ? cache.science : meta.label;
							cache.science = (buildTemple) ? cache.science : "神殿";
							msgScience('manuscript');
							cache.resources['manuscript'] = 0;
						}
						break;
					}
				}
				if (!scienceMeta.meta[18].researched && cultrueTri > 0.9 && resValue < 65) {force = true;}
				if (aboveTrigger && 4000 * this.getTickVal(this.getResource('parchment'), true) < 2500) {
					limited = false;
				}
			}

			let religion = resMap['gold'].maxValue < 500 || (game.religion.getRU('solarRevolution').on && game.religion.faith > 1000);
			if (name === 'compedium' && limited && gScience.get('navigation').researched && religion) {
				let cacheCompedium = cache.resources['compedium'];
				indexMax = (cacheCompedium) ? 19 : 27;
				for (i = 18; i < indexMax; i++) {
					if (game.prestige.getPerk("numerology").researched && !game.calendar.festivalDays && game.science.get("drama").unlocked) {break;}
					let meta = scienceMeta.meta[i];
					if (!meta.researched || cacheCompedium > 0) {
						if (meta.name === 'metaphysics' || meta.name === 'drama') {
							continue;
						}
						if (meta.prices[1].name === name || cacheCompedium) {
							let price = (cacheCompedium || meta.prices[1].val);
							autoMax = Math.ceil((price - resValue) / ratio);
							let resVal = this.getValueAvailable('manuscript', true);
							let scienceCheck = scienceVal > 1e4 * autoMax || scienceTri >= 1;
							if (resVal > autoMax * 50 && autoMax >= 1 && scienceCheck) {
								cache.science = (cacheCompedium > 0) ? cache.science : meta.label;
								msgScience('compedium');
								cache.resources['manuscript'] = 0;
								cache.resources['compedium'] = 0;
							} else if (autoMax >= 1) {
								cache.resources['manuscript'] = autoMax * 50;
								cache.science = (cacheCompedium > 0) ? cache.science : meta.label;
							}
						}
						break;
					}
				}
				if (!scienceMeta.meta[32].researched && cultrueTri > 0.98 && resValue < 100 && scienceTri > 0.98) {
					force = true;
				}
			}

			if (name === 'blueprint' && limited && gScience.get('electricity').researched) {
				//indexMax = (game.village.maxKittens > 130) ? 44 : 34;
				for (i = 30; i < 44; i++) {
					let meta = scienceMeta.meta[i];
					if (!meta.researched) {
						let metaName = meta.name;
						let filterName = ['quantumCryptography', 'blackchain', 'ecology', 'ai'];
						if (filterName.indexOf(metaName) > -1) {
							continue;
						}
						if (meta.prices[1].name === name) {
							autoMax = Math.ceil((meta.prices[1].val - resValue) / ratio);
							let resVal = this.getValueAvailable('compedium', true);
							let scienceCheck = scienceVal > 2.5e4 * autoMax || scienceTri >= 1;
							if (resVal > autoMax * 25 && autoMax >= 1 && scienceCheck) {
								cache.science = meta.label;
								msgScience('blueprint');
								cache.resources['manuscript'] = 0;
								cache.resources['compedium'] = 0;
							} else if (autoMax >= 1) {
								cache.resources['compedium'] = autoMax * 25;
								cache.science = meta.label;
							}
						}
						break;
					}
				}
			}

			let useRatio = this.getLimRat(name, limited, limRat);

			if (name === 'parchment') {
				limited = ratio < 2.1;
				if (!resValue && ratio > 1.5) {
					force= true;
					autoMax = 2;
				}
			}

			// 计算制作多少
			for (i in materials) {
				delta = 0;
				let material = materials[i];
				let craftAll = (!limited || force || (resMap[i].maxValue > 0 && aboveTrigger));
				if (craftAll) {
					// If there is a storage limit, we can just use everything returned by getValueAvailable, since the regulation happens there
					delta = this.getValueAvailable(i, force) / material;
				} else {
					// Take the currently present amount of material to craft into account
					// Currently this determines the amount of resources that can be crafted such that base materials are proportionally distributed across limited resources.
					// This base material distribution is governed by limRat "limited ratio" which defaults to 0.5, corresponding to half of the possible components being further crafted.
					// If this were another value, such as 0.75, then if you had 10000 beams and 0 scaffolds, 7500 of the beams would be crafted into scaffolds.
					delta = useRatio * ((this.getValueAvailable(i, true) + (material / ratio) * resValue) / material) - (resValue / ratio);
				}

				amount = Math.min(delta, amount, autoMax);
			}

			if (name === 'steel' && limited) {
				let calciner = game.bld.getBuildingExt('calciner').meta;
				let steelValAva = this.getValueAvailable('steel');
				let ironHut = !game.ironWill && !game.getEffect('hutPriceRatio') && resMap['iron'].maxValue > 3000 && workshop.get('ironwood').unlocked;
				if ((resValue > 500 || ironHut) && this.getValueAvailable('plate') / steelValAva < 1.25) {amount = 0;}
				let forceSteel = (name, prices) => {
					let workshopMeta;
					if (name) {
						workshopMeta = workshop.get(name);
						prices = workshopMeta.prices;
						if (!workshopMeta.unlocked) {return;}
					}
					if (!name || !workshopMeta.researched) {
						let steelPrice;
						for (let Res in prices) {
							if (prices[Res].name === 'steel') {
								steelPrice = prices[Res].val;
							}
						}
						let amt = Math.ceil((steelPrice - resValue) / ratio);
						if (name === 'oxidation' && amt > 0) {
							// 7分钟
							if (amt / Math.min(resMap['iron'].perTickCached, resMap['coal'].perTickCached) < 21) {
								options.auto.resources['steel'] = {enabled: true,  stock: 5000};
								options.auto.craft.oxidation = true;
								msgSummary('oxidation');
							}
							if (options.auto.craft.oxidation && resMap['iron'].value > 100 * amt && resMap['coal'].value > 100 * amt) {
								options.auto.craft.oxidation = null;
								steelPrice = true;
							}
						}
						let checkRes = (this.getValueAvailable('iron', true) > 100 * amt && this.getValueAvailable('coal', true) > 100 * amt) || steelPrice === true;
						if (amt > 0 && checkRes) {
							amount = amt;
							force = true;
							if (name) {
								iactivity("craft.forceSteel", [workshopMeta.label]);
							}
						}
					}
				};
				if (options.auto.resources['steel'] && options.auto.resources['steel'].checkForReset === undefined) {
					let oxidation = workshop.get('oxidation');
					if (!oxidation.unlocked || oxidation.researched) {
						delete options.auto.resources['steel'];
						delete options.auto.resources['iron'];
						delete options.auto.resources['coal'];
						saveToKittenStorage();
					}
				}
				forceSteel('steelSaw');
				forceSteel('steelAxe');
				forceSteel('steelArmor');
				let calVal = calciner.val;
				if (calVal) {
					if (!calciner.isAutomationEnabled) {
						let calcinerAmount = 0.003 * game.bld.get("reactor").on * ( 1 + game.getEffect("calcinerRatio")) * 0.1
							* game.bld.getAutoProductionRatio() * (1 + game.getEffect("ironPolicyRatio"))
							* game.calendar.cycleEffectsFestival({iron: 1})['iron'] * calciner.val * (1 + game.getEffect("ironPolicyRatio"));
						amount = (amount <= 0) ? calcinerAmount : Math.min(amount + calcinerAmount, resMap['coal'].value / 100);
					}
					if (calVal > 1) {
						forceSteel('oxidation');
						let cacheUpg = options.auto.upgrade.items.upgrades;
						if (workshop.get('oxidation').researched && cacheUpg.cache === 'oxidation') {
							cacheUpg.cache = false;
							let Upg = options.auto.cache.resUpg;
							for (let i in Upg) {
								delete Upg[i];
							}
						}
						let alloyVal = resMap['alloy'].value;
						let orb = workshop.get('orbitalGeodesy');
						if (orb.unlocked && !orb.researched && resMap['oil'].value > 1.7e4 && resMap['oil'].maxValue > 3.5e4) {
							let a = Math.ceil((1000 - alloyVal) / ratio);
							a = (a > 0 && resMap['titanium'].value > a * 5) || (resMap['alloy'].value > 300 && calVal > 20);
							if (a > 0 && resMap['titanium'].value > a * 5 && !cacheUpg.cache) {
								options.auto.cache.resUpg['alloy'] = 1000;
								cacheUpg.cache = 'orbitalGeodesy';
							}
						}
						let flu = workshop.get('fluidizedReactors');
						if (flu.unlocked && !flu.researched && !cacheUpg.cache) {
							let a = Math.ceil((200 - alloyVal) / ratio);
							a = (a > 0 && resMap['titanium'].value > a * 5) || resMap['alloy'].value > 50;
							if (a && calVal > 9) {
								options.auto.cache.resUpg['alloy'] = 200;
								cacheUpg.cache = 'fluidizedReactors';
							}
						}
						let alloyCache = options.auto.cache.resUpg['alloy'];
						if (alloyCache) {
							let b =  Math.ceil((alloyCache - alloyVal) / ratio);
							forceSteel('', [{name:'steel',val:b*75}]);
						}
					}
				} else if (game.challenges.isActive("blackSky")) {
					forceSteel('', [{name:'steel',val:1100}]);
				}
			}

			if (name === 'alloy' && limited) {
				let forceAlloy = (name, price) => {
					let workshopMeta = workshop.get(name);
					if (workshopMeta.researched || !workshopMeta.unlocked) {return;}
					let amt = Math.ceil((price - resMap['alloy'].value) / ratio);
					if (amt > 1 && resMap['steel'].value > amt * 75 && resMap['titanium'].value > amt * 10) {
						amount = amt;
						force = true;
						iactivity("craft.forceSteel", [workshopMeta.label]);
					}
				};
				if (resMap['oil'].value > 35000) {
					forceAlloy('orbitalGeodesy', 1000);
				}
				forceAlloy('fluidizedReactors', 200);
				forceAlloy('alloyAxe', 25);
			}

			if (amount <= 0) {return 0;}
			// If we have a maximum value, ensure that we don't produce more than
			// this value. This should currently only impact wood crafting, but is
			// written generically to ensure it works for any craft that produces a
			// good with a maximum value.

			let maxValue = resMap[name].maxValue;
			let value = resMap[name].value;
			if (maxValue > 0 && amount * ratio > (maxValue - value)) {
				amount = (maxValue - value) / ratio;
			}

			if (limited && !force && (!aboveTrigger || aboveTrigger === 'noRequire')) {
				amount *= Math.max(Math.min(Math.log(ratio - 1), 1), 0.2);
			}

			return amount;
		},
		getMaterials: function (name) {
			let materials = {};
			let craft = this.getCraft(name);

			// Safeguard against craft items that aren't actually available yet.
			if (!craft) {return;}

			let prices = game.workshop.getCraftPrice(craft);

			for (const i in prices) {
				let price = prices[i];

				materials[price.name] = price.val;
			}

			return materials;
		},
		getTickVal: function (res, preTrade) {
			let prod = game.getResourcePerTick(res.name, true);
			if (res.name === 'timeCrystal') {
				let aliChance = game.getEffect("alicornChance");
				let alicornTick = game.getResourcePerTick("alicorn");
				let tcRefineRatio = 0.04 * (1 + game.getEffect("tcRefineRatio"));
				aliChance *= 1 + game.getLimitedDR(game.getEffect("alicornPerTickRatio"), 1.2);
				let aliChanceTick = Math.min(aliChance, 1) * 0.2 * (1 + game.timeAccelerationRatio());
				prod += (aliChanceTick + alicornTick) * tcRefineRatio;
			}
			if (res.craftable) {
				let minProd = Number.MAX_VALUE;
				let materials = this.getMaterials(res.name);
				for (let mat in materials) {
					let rat = (1 + game.getResCraftRatio(res.name)) / materials[mat];
					//Currently preTrade is only true for the festival stuff, so including furs from hunting is ideal.
					let addProd = this.getTickVal(this.getResource(mat));
					minProd = Math.min(addProd * rat, minProd);
				}
				prod += (minProd === Number.MAX_VALUE) ? 0 : minProd;
			}
			let ignore = (res.name === 'spice' || res.name === 'blueprint');
			if (prod <= 0 && ignore) {return 'ignore';}
			if (!preTrade) {prod += this.cacheManager.getResValue(res.name);}
			return prod;
		},
		getAverageHunt: function() {
			let output = {};
			let hunterRatio = game.getEffect('hunterRatio') + game.village.getEffectLeader('manager', 0);

			output['furs'] = 40 + 32.5 * hunterRatio;

			output['ivory'] = 50 * Math.min(0.225 + 0.01 * hunterRatio, 0.5) + 40 * hunterRatio * Math.min(0.225 + 0.01 * hunterRatio, 0.5);

			output['unicorns'] = 0.05;

			if (this.getValue('zebras') >= 10) {
				output['bloodstone'] = (this.getValue('bloodstone') === 0) ? 0.05 : 0.0005;
			}

			if (game.ironWill && game.workshop.get('goldOre').researched) {
				output['gold'] = 0.625 + 0.625 * hunterRatio;
			}

			return output;
		},
		getResource: function (name) {
			let res = resMap[name];
			if (res) {return res;}
			warning('unable to find resource ' + name);
			return null;
		},
		getValue: function (name) {
			return this.getResource(name).value;
		},
		getStock: function (name) {
			let res = options.auto.resources[name];
			let stock = (res && res.enabled) ? res.stock : 0;
			let workshop = game.workshop;
			let unResearched = (name) => {
				let meta = workshop.metaCache[name];
				return (meta.unlocked && !meta.researched);
			};

			if (name === 'iron') {
				let lumberMill = game.bld.get('lumberMill').val > 19 - 40 * game.getEffect("priceRatio");
				let a = resMap['gold'].value < 50 && lumberMill;
				if (game.bld.getBuildingExt('temple').meta.on > 2 || resMap['faith'].maxValue > 749 || a || resMap['plate'].value > 18) {
					let reinforcedSaw = unResearched('reinforcedSaw') && resMap[name].value > 200 && resMap[name].maxValue > 1e3;
					if (reinforcedSaw) {
						stock += 1000;
					}
					let crossbow = unResearched('crossbow') && lumberMill && resMap[name].maxValue > 1500;
					if (crossbow) {
						stock += 1500;
					}
					let ironwood = unResearched('ironwood') && resMap[name].value > 800 && resMap[name].maxValue > 3000 && resMap['science'].maxValue > 3e4;
					ironwood &= !game.ironWill;
					if (ironwood) {
						stock += 3000;
						msgSummary('ironwood');
					} else {msgSummary('ironwood', true);}
				}
			}
			let cacheAlloy = options.auto.cache.resUpg[name];
			if (name === 'steel') {
				let steelAxe = unResearched('steelAxe') && resMap['coal'].value > 3000;
				if (steelAxe && (game.bld.get('lumberMill').val > 30 || resMap[name].value > 10)) {
					stock += 75;
				}
				let steelSaw = unResearched('steelSaw') && resMap[name].value > 250;
				if (steelSaw) {
					stock += 750;
				}
				let cacheSteel = options.auto.cache.resUpg['steel'];
				if (cacheSteel) {
					stock += cacheSteel;
				}
				if (cacheAlloy) {
					stock += cacheAlloy * 75 / game.getEffect("craftRatio");
				}
			}
			if (name === 'alloy') {
				if (cacheAlloy) {
					stock += cacheAlloy;
				}
			}
			if (name === 'titanium') {
				if (unResearched('rotaryKiln') && workshop.get('orbitalGeodesy').researched) {stock += 5000;}
				// if (unResearched('augumentation') && resMap['uranium'].value > 50 && game.village.leader && workshop.get('rotaryKiln').researched) {stock += 5000;}
				if (unResearched('spaceManufacturing') && game.bld.get('reactor').val > 24 && resMap['titanium'].maxValue > 125e3) {stock += 13e5;}
			}
			if (name === 'gear') {
				if (unResearched('rotaryKiln') && workshop.get('orbitalGeodesy').researched) {stock += 5000;}
			}
			if (name === 'beam') {
				if (unResearched('deepMining') && resMap['iron'].value > 1200) {stock += 5000;}
			}
			return stock ? stock : 0;
		},
		getValueAvailable: function (name, all, typeTrigger) {
			let value = this.getValue(name);
			let stock = this.getStock(name);

			let trigger;
			if (!typeTrigger && typeTrigger !== 0) {
				if (typeTrigger === undefined) {
					trigger = 1;
				} else {
					trigger = options.auto.craft.trigger;
				}
			} else {
				trigger = typeTrigger;
			}

			if (name === 'catnip') {
				let resPerTick = this.getPotentialCatnip(false);
				let catnipTick = (game.calendar.season !== 0 || this.getResource(name).maxValue * trigger < value || game.getResourcePerTick("catnip", true) < 0);
				if (resPerTick < 0 && catnipTick) {
					stock -= resPerTick * 1500;
					// 200秒
					if (options.auto.options.catnipMsg + 2e5 < Date.now()) {
						activity(i18n('craft.winterCatnip'));
						options.auto.options.catnipMsg = Date.now();
					}
				}
			}

			value = Math.max(value - stock, 0);

			// If we have a maxValue, and user hasn't requested all, check
			// consumption rate
			let maxValue = (typeTrigger && !all && name === 'slab') ? value : this.getResource(name).maxValue;
			if (!all && maxValue > 0) {
				let res = options.auto.resources[name];
				let consume = res && res.enabled && (res.consume !== undefined) ? res.consume : options.consume;
				let craftItem = options.auto.craft.autoConsume;
				if (craftItem[name] && !typeTrigger) {
					consume = 1;
					craftItem[name] = 0;
				}

				value -= Math.min(maxValue, value) * (1 - consume);

				if (name === 'unobtainium' && value + stock < 1000 && this.getResource(name).value === maxValue && this.getResource(name).value >= 1000) {
					value = this.getResource(name).value;// fix unobtainium carfting to eludium
				}
			}

			return value;
		},
		getLimRat: function (name, limited, limRat) {
			let res = resMap[name];
			let shipValue = resMap['ship'].value;
			let renaissance = game.prestige.getPerk('renaissance').researched;
			let space = game.space;
			let reactor = game.bld.get('reactor');
			//if (limited) {
			//	switch (name) {
			//}
			if (!limited) {return limRat;}
			let navigation = game.science.get('navigation');
			if (name === 'wood') {
				limRat = (0.09 + res.perTickCached < resMap['catnip'].perTickCached / game.workshop.getCraft("wood").prices[0].val && this.getPotentialCatnip()) ? 1 : limRat;
			}
			if (name === 'beam') {
				let craftBeam = navigation.unlocked || resMap['gold'].maxValue < 500 || (resMap['iron'].value > 1000 && !resMap['coal'].value);
				limRat = (craftBeam) ? limRat : 5e-3;
				limRat = (resMap['scaffold'].value < 500) ? limRat : 0.02;
			}
			if (name === 'slab') {
				let a = resMap['faith'].maxValue < 750 && res.value < 51 && resMap['gold'].value > 35;
				limRat = (resMap['scaffold'].value || a || (reactor.val && res.value < 2500)) ? limRat : 9e-3;
				limRat = (resMap['scaffold'].value < 500) ? limRat : 0.01;
			}

			if (name === 'ship') {
				let shipLimit = 5 * game.bld.get("reactor").on + 225;
				let titaniumMax = resMap['titanium'].maxValue;
				let satnav = !space.meta[0].meta[3].on && space.getBuilding('sattelite').val < 9;
				let sloar = game.religion.getSolarRevolutionRatio();
				let manufacture = satnav && sloar > 6 && titaniumMax < 125e3;
				satnav = satnav && sloar > 6 && titaniumMax > 120e3;
				limRat = (shipValue > shipLimit * 0.75 ) ? 0.25 : limRat;
				limRat = (shipValue > shipLimit * 3 || manufacture) ? 0.05 : limRat;
				limRat = (satnav && (!game.workshop.get('satnav').researched || titaniumMax > 123e3)) ? 0 : limRat;
				limRat = (0.03 * shipValue > titaniumMax) ? 0 : limRat;
			}

			if (name === 'plate') {
				let reactor = resMap['titanium'].value > 3500 && resMap['uranium'].value > 250 && !game.bld.get('reactor').val;
				limRat = (game.getEffect('calcinerRatio')) ? limRat : 0.3;
				limRat = ((res.value < 150 && navigation.researched && resMap['starchart'].value > 15 && resMap['scaffold'].value > 50) || reactor) ? 0.9 : limRat;
				limRat = (options.auto.craft.oxidation && !game.workshop.get('oxidation').researched) ? 0 : limRat;
			}

			if (name === 'alloy') {
				let titaniumTick = game.globalEffectsCached['titaniumPerTickAutoprod'];
				limRat = (game.bld.get("steamworks").on < game.bld.get("magneto").on || titaniumTick === 5e-4) ? limRat : 0.75;
				let magneto = game.bld.get('magneto');
				let priceRatio = Math.pow(magneto.priceRatio + game.getEffect("priceRatio"), magneto.val);
				limRat = (res.value > Math.max(1250, 10 * priceRatio) && options.auto.build.items.magneto.enabled) ? 0.01 : limRat;
				limRat = (resMap['titanium'].value < 25 && !titaniumTick) ? 0 : limRat;
			}

			// 减少E合金的合成
			if (name === 'eludium') {
				let RR = game.time.getCFU("ressourceRetrieval").on;
				limRat = (RR) ? 1e-5 : limRat;
			}

			if (name === 'megalith') {
				if (res.value > 50 || game.bld.metaCache.ziggurat.meta.on || resMap['unicorns'].value < 1000) {
					if (!game.workshop.get('orbitalGeodesy').researched) {
						limRat = 0.01;
					}
				}
				let ziggurat = game.bld.get('ziggurat');
				let priceRatio = Math.pow(ziggurat.priceRatio + game.getEffect("priceRatio"), ziggurat.val);
				limRat = (res.value > Math.max(100, 50 * priceRatio)) ? 5e-3 : limRat;
				limRat = (!res.unlocked && game.diplomacy.get('nagas').embassyLevel > 15 && game.calendar.season === 0 && resMap['unicorns'].value > 900) ? 1 : limRat;
			}

			if (name === 'concrate') {
				let moon = space.getBuilding('moonOutpost').val;
				moon = 150 * Math.pow(1.12, moon);
				let priceRatio = Math.pow(reactor.priceRatio + game.getEffect("priceRatio"), reactor.val);
				limRat = (reactor.val) ? limRat : 0.3;
				limRat = (res.value > Math.max(moon, 50 * priceRatio)) ? 0.01 : limRat;
				limRat = (!res.unlocked && game.diplomacy.get('nagas').embassyLevel > 10 && !game.calendar.season && resMap['titanium'].value > 500) ? 1 : limRat;
			}

			if (name === 'gear') {
				let steamworks = game.bld.get('steamworks');
				let priceRatio = Math.pow(steamworks.priceRatio + game.getEffect("priceRatio"), steamworks.val);
				let logistics = game.workshop.get('logistics');
				let fuelInjectors = resMap['oil'].value > 2e4 && resPercent('coal') < 0.5 && res.value < 250 && !game.workshop.get('fuelInjectors').researched;
				limRat = (res.value > 30 && (!logistics.unlocked && logistics.researched)) ? 0.3 : limRat;
				limRat = (fuelInjectors) ? 0.7 : limRat;
				limRat = (res.value > Math.max(500, 20 * priceRatio)) ? 5e-3 : limRat;
				limRat = (steamworks.val || game.science.get('chemistry').researched) ? limRat : 0;
			}

			if (name === 'kerosene') {
				limRat = (space.meta[0].meta[1].val) ? limRat : 0;
			}

			if (name === 'manuscript') {
				limRat = (game.prestige.getPerk("numerology").researched && !game.calendar.festivalDays && game.science.get("drama").unlocked) ? 0.25 : limRat;
			}

			if (name === 'compedium') {
				limRat = (game.science.get('architecture').unlocked) ? limRat : 0;
			}

			if (name === 'blueprint') {
				limRat = (game.science.get('industrialization').unlocked) ? limRat : 0;
			}

			if (name === 'scaffold') {
				let observatory = game.bld.get('observatory');
				let priceRatio = Math.pow(observatory.priceRatio + game.getEffect("priceRatio"), observatory.val);
				limRat = (res.value < 100 && game.science.get('navigation').unlocked && resMap['iron'].value > 750) ? 1 : limRat;
				limRat = (game.science.get('navigation').unlocked) ? limRat : 0;
				//limRat = (res.value < 50 * priceRatio && res.value > 85 && resMap['science'].value < 15e4) ? 1 : limRat;
			}
			return limRat;
		},
		getPotentialCatnip: function (worstWeather, pastures, aqueducts) {
			let fieldProd = game.getEffect('catnipPerTickBase');
			if (worstWeather) {
				fieldProd *= 0.1;
				fieldProd *= 1 + game.getLimitedDR(game.getEffect("coldHarshness"),1);

				if (game.science.getPolicy("communism").researched) {fieldProd = 0;}

			} else {
				//fieldProd *= game.calendar.getWeatherMod({name: "catnip"});
				let calendar = (game.calendar.year < 4) ? 0 : 0.15;
				fieldProd *= game.calendar.seasons[3].modifiers.catnip - calendar;
			}
			let vilProd = (game.village.getResProduction().catnip) ? game.village.getResProduction().catnip * (1 + game.getEffect('catnipJobRatio')) : 0;
			let baseProd = fieldProd + vilProd;

			if (aqueducts === undefined) {
				baseProd *= 1 + game.getEffect('catnipRatio');
			} else {
				let hydroponics = game.space.getBuilding('hydroponics');
				let hydroponicsEffect = hydroponics.effects['catnipRatio'];
				baseProd *= 1 + game.bld.getBuildingExt('aqueduct').meta.stages[0].effects['catnipRatio'] * aqueducts + hydroponicsEffect * hydroponics.val;
			}

			let paragonBonus = (game.challenges.isActive("winterIsComing")) ? 0 : game.prestige.getParagonProductionRatio();
			baseProd *= 1 + paragonBonus;

			baseProd *= 1 + game.religion.getSolarRevolutionRatio() * (1 + game.bld.pollutionEffects["solarRevolutionPollution"]);

			//if (!game.opts.disableCMBR) {baseProd *= (1 + game.getCMBRBonus());}

			baseProd *= 1 + (game.getEffect('blsProductionBonus') * game.resPool.get('sorrow').value);

			baseProd = game.calendar.cycleEffectsFestival({catnip: baseProd})['catnip'];

			baseProd *= 1 + game.bld.pollutionEffects["catnipPollutionRatio"];

			let baseDemand = game.village.getResConsumption()['catnip'];
			let uniPastures = game.bld.getBuildingExt('unicornPasture').meta.val;
			if (pastures === undefined) {
				baseDemand *= 1 + game.getEffect("catnipDemandRatio");
			} else {
				baseDemand *= 1 + (game.getLimitedDR(pastures * -0.005 + uniPastures * -0.0015, 1.0));
			}

			if (game.village.sim.kittens.length > 0 && game.village.happiness > 1) {
				let happyCon = Math.max(game.village.happiness * (1 + game.getEffect("hapinnessConsumptionRatio")) - 1, 0);
				if (game.challenges.isActive("anarchy")) {
					baseDemand *= 1 + happyCon * (1 + game.getEffect("catnipDemandWorkerRatioGlobal"));
				} else {
					baseDemand *= 1 + happyCon * (1 + game.getEffect("catnipDemandWorkerRatioGlobal")) * (1 - game.village.getFreeKittens() / game.village.sim.kittens.length);
				}
			}
			baseProd += baseDemand;

			baseProd += game.getResourcePerTickConvertion('catnip');

			//Might need to eventually factor in time acceleration using game.timeAccelerationRatio().
			return baseProd;
		}
	};

	// Bulk Manager
	// ============

	let BulkManager = function () {
		this.craftManager = new CraftManager();
	};

	BulkManager.prototype = {
		craftManager: undefined,
		bulk: function (builds, metaData, trigger, source) {
			let nextPriceCheck;
			let data, prices, priceRatio, i;
			const bList = [];
			const countList = [];
			let counter = 0;
			for (const name in builds) {
				build = builds[name];
				data = metaData[name];
				if (!build.enabled) {continue;}
				// 建筑数量大于等于限值时直接下一个
				if (build.max !== -1 && build.max <= data.val) { continue; }
				if (data.tHidden === true) {continue;}
				if (data.rHidden === true) {continue;}
				if ((data.rHidden === undefined) && !data.unlocked) {continue;}
				if (name === 'cryochambers' && (game.time.getVSU('usedCryochambers').val > 0
					|| game.bld.getBuildingExt('chronosphere').meta.val <= data.val)) {continue;}
				if (name === 'ressourceRetrieval' && data.val >= 100) {continue;}
				if (data.stage !== build.stage) {continue;}
				let prices = (data.stages) ? data.stages[data.stage].prices : data.prices;
				if (build.variant === 's') {prices = game.village.getEffectLeader("wise", dojo.clone(data.prices));}
				priceRatio = this.getPriceRatio(data, source);
				if (!this.singleBuildPossible(data, prices, priceRatio, source)) {continue;}
				if (data.almostLimited && !game.workshop.get('geodesy').researched && game.village.leader){continue;}
				let require = build.require ? this.craftManager.getResource(build.require) : false;
				if (!require || trigger <= require.value / require.maxValue) {
					if (typeof(build.stage) !== 'undefined' && build.stage !== data.stage) {
						continue;
					}
					bList[counter] = {};
					bList[counter].id = name;
					bList[counter].label = build.label;
					bList[counter].name = build.name;
					bList[counter].stage = build.stage;
					bList[counter].variant = build.variant;
					countList[counter] = {};
					countList[counter].id = name;
					countList[counter].name = build.name;
					countList[counter].count = 0;
					countList[counter].spot = counter;
					countList[counter].prices = [];
					let pricesDiscount = game.getLimitedDR(game.getEffect(name + "CostReduction"), 1);
					let priceModifier = 1 - pricesDiscount;
					for (i in prices) {
						let resPriceDiscount = game.getLimitedDR(game.getEffect(prices[i].name + "CostReduction"), 1);
						let resPriceModifier = 1 - resPriceDiscount;
						countList[counter].prices.push({
							val: prices[i].val * priceModifier * resPriceModifier,
							name: prices[i].name
						});
					}

					countList[counter].priceRatio = priceRatio;
					countList[counter].source = source;
					countList[counter].limit = (isNaN(build.max)) ? -1 : build.max;
					countList[counter].val = data.val;
					counter++;
				}
			}

			if (countList.length === 0) {return;}

			let tempPool = {};
			for (let res in game.resPool.resources) {
				tempPool[game.resPool.resources[res].name] = game.resPool.resources[res].value;
			}
			for (let res in tempPool) {tempPool[res] = this.craftManager.getValueAvailable(res, true);}

			let k = 0;
			while (countList.length !== 0) {
				bulkLoop:
				for (let j = 0; j < countList.length; j++) {
					let build = countList[j];
					data = metaData[build.id];
					let dataVal = data.val;
					prices = build.prices;
					priceRatio = build.priceRatio;
					source = build.source;
					for (let p = 0; p < prices.length; p++) {
						let spaceOil, cryoKarma, oilPrice, karmaPrice = false;
						if (source && source === 'space' && prices[p].name === 'oil') {
							spaceOil = true;
							oilPrice = prices[p].val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
						} else if (build.id === 'cryochambers' && prices[p].name === 'karma') {
							cryoKarma = true;
							karmaPrice = prices[p].val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
						}

						if (spaceOil) {
							nextPriceCheck = (tempPool['oil'] < oilPrice * Math.pow(1.05, k + dataVal));
						} else if (cryoKarma) {
							nextPriceCheck = (tempPool['karma'] < karmaPrice * Math.pow(priceRatio, k + dataVal));
						} else {
							let price = prices[p].val * Math.pow(priceRatio, k + dataVal);
							nextPriceCheck = tempPool[prices[p].name] < price;
						}
						if (nextPriceCheck || (data.noStackable && (k + dataVal) >= 1) || (build.id === 'ressourceRetrieval' && k + dataVal >= 100)
						  || (build.id === 'cryochambers' && game.bld.getBuildingExt('chronosphere').meta.val <= k + dataVal)) {
							for (let p2 = 0; p2 < p; p2++) {
								if (source && source === 'space' && prices[p2].name === 'oil') {
									let oilPriceRefund = prices[p2].val * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
									tempPool['oil'] += oilPriceRefund * Math.pow(1.05, k + dataVal);
								} else if (build.id === 'cryochambers' && prices[p2].name === 'karma') {
									let karmaPriceRefund = prices[p2].val * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
									tempPool['karma'] += karmaPriceRefund * Math.pow(priceRatio, k + dataVal);
								} else {
									let refundVal = prices[p2].val * Math.pow(priceRatio, k + dataVal);
									tempPool[prices[p2].name] += (prices[p2].name === 'void') ? Math.ceil(refundVal) : refundVal;
								}
							}
							if (build.limit !== -1) {
								build.count = Math.max(0, Math.min(build.count, (build.limit - build.val)));
							}
							bList[countList[j].spot].count = countList[j].count;
							countList.splice(j, 1);
							j--;
							continue bulkLoop;
						}
						if (spaceOil) {
							tempPool['oil'] -= oilPrice * Math.pow(1.05, k + dataVal);
						} else if (cryoKarma) {
							tempPool['karma'] -= karmaPrice * Math.pow(priceRatio, k + dataVal);
						} else {
							let pVal = prices[p].val * Math.pow(priceRatio, k + dataVal);
							tempPool[prices[p].name] -= (prices[p].name === 'void') ? Math.ceil(pVal) : pVal;
							// 检查 NaN
							tempPool[prices[p].name] = tempPool[prices[p].name] ? tempPool[prices[p].name] : 0;
						}
					}
					countList[j].count++;
				}
				k++;
			}
			return bList;
		},
		construct: function (model, button, amount) {
			const meta = model.metadata;
			let counter = 0;
			if (typeof meta.limitBuild == "number" && meta.limitBuild - meta.val < amount) {
				amount = meta.limitBuild - meta.val;
			}
			if (!model.enabled) {button.controller.updateEnabled(model);}
			if (model.enabled && button.controller.hasResources(model) || game.devMode ) {
				while (button.controller.hasResources(model) && amount > 0) {
					model.prices = button.controller.getPrices(model);
					button.controller.payPrice(model);
					button.controller.incrementValue(model);
					counter++;
					amount--;
				}
				if (meta.breakIronWill) {
					game.ironWill = false;
					let liberty = game.science.getPolicy("liberty");
					liberty.calculateEffects(liberty, game);
				}
				if (meta.unlockScheme && meta.val >= meta.unlockScheme.threshold) {
					game.ui.unlockScheme(meta.unlockScheme.name);
				}
				if (meta.unlocks) {game.unlock(meta.unlocks);}
				if (meta.upgrades) {
					if (meta.updateEffects) {
						meta.updateEffects(meta, game);
					}
					cacheUpgrades(meta);
					//game.upgrade(meta.upgrades);
				}
			}
			return counter;
		},
		getPriceRatio: function (data, source) {
			let ratio = (data.stages) ? (data.priceRatio || data.stages[data.stage].priceRatio) : data.priceRatio;

			let ratioDiff = 0;
			if (source && source === 'bonfire') {
				ratioDiff = game.getEffect(data.name + "PriceRatio") +
					game.getEffect("priceRatio") +
					game.getEffect("mapPriceReduction");

				ratioDiff = game.getLimitedDR(ratioDiff, ratio - 1);
			}
			return ratio + ratioDiff;
		},
		singleBuildPossible: function (data, prices, priceRatio, source) {
			let pricesDiscount = game.getLimitedDR(game.getEffect(data.name + "CostReduction"), 1);
			let priceModifier = 1 - pricesDiscount;
			for (let price in prices) {
				let resPriceDiscount = game.getLimitedDR(game.getEffect(prices[price].name + "CostReduction"), 1);
				let resPriceModifier = 1 - resPriceDiscount;
				let rightPrice = prices[price].val * priceModifier * resPriceModifier;
				if (source && source === 'space' && prices[price].name === 'oil') {
					let oilPrice = rightPrice * (1 - game.getLimitedDR(game.getEffect('oilReductionRatio'), 0.75));
					if (this.craftManager.getValueAvailable('oil', true) < oilPrice * Math.pow(1.05, data.val)) {return false;}
				} else if (data.name === 'cryochambers' && prices[price].name === 'karma') {
					let karmaPrice = rightPrice * (1 - game.getLimitedDR(0.01 * game.prestige.getBurnedParagonRatio(), 1.0));
					if (this.craftManager.getValueAvailable('karma', true) < karmaPrice * Math.pow(priceRatio, data.val)) {return false;}
				} else {
					if (this.craftManager.getValueAvailable(prices[price].name, true) < rightPrice * Math.pow(priceRatio, data.val)) {return false;}
				}
			}
			return true;
		}
	};

	// Trading Manager
	// ===============

	let TradeManager = function () {
		this.craftManager = new CraftManager();
		this.manager = new TabManager('Trade');
	};

	TradeManager.prototype = {
		craftManager: undefined,
		manager: undefined,
		trade: function (name, amount) {
			if (!name || amount < 1) {warning(name + '-' + amount + '贸易可能出点问题');}

			let race = this.getRace(name);
			let button = this.getTradeButton(race.name);
			let leader = (options.auto.cache.trait['merchant']) ? '商人小猫与' : '小猫与';

			if (!button.model.enabled) {
				return button.controller.updateEnabled(button.model);
			}
			if (name !== 'sharks' && !options.auto.trade.items[name].enabled) {warning('贸易可能出点问题');}

			game.diplomacy.tradeMultiple(race, amount);
			game.stats.getStat("totalClicks").val += 1;
			storeForSummary(leader + ' ' + race.title, amount, 'trade');
			iactivity('act.trade', [amount, leader + ucfirst(race.title)], 'ks-trade');
		},
		getProfitability: function (name) {
			let tick;
			let race = this.getRace(name);

			let materials = this.getMaterials(name);
			let cost = 0;
			for (let mat in materials) {
				if (mat === 'ivory') {continue;}
				tick = this.craftManager.getTickVal(this.craftManager.getResource(mat));
				if (tick <= 0) {return false;}
				cost += materials[mat] / tick;
			}

			let output = this.getAverageTrade(race);
			let profit = 0;
			for (let prod in output) {
				let res = this.craftManager.getResource(prod);
				tick = this.craftManager.getTickVal(res);
				if (tick === 'ignore') {continue;}
				if (tick <= 0) {return true;}
				profit += (res.maxValue > 0) ? Math.min(output[prod], Math.max(res.maxValue - res.value, 0)) / tick : output[prod] / tick;
			}
			let prof = true;
			if (name === 'nagas') {
				if (!resMap['ship'].value && race.embassyLevel < 10 && !game.ironWill) {prof = false;}
			}
			if (name === 'griffins') {
				if (resMap['ship'].value && game.calendar.season !== 2 && (resMap['ship'].value > 200 || game.getEffect("productionRatio"))) {prof = false;}
			}
			if (name === 'zebras') {
				prof = prof && game.getEffect("standingRatio") > 0.1;
				let griffins = options.auto.trade.items.griffins;
				let iron = this.craftManager.getTickVal(resMap['iron']);
				let titanium = resMap['titanium'];
				let titaniumProfit = Math.min(output['titanium'], Math.max(titanium.maxValue - titanium.value, 0)) / this.craftManager.getTickVal(titanium);
				let autumnIron = this.getAverageTrade(this.getRace('griffins'))['iron'] / iron < output['iron'] / iron + titaniumProfit;
				if (griffins.enabled && griffins.autumn && game.calendar.season === 2) {
					prof = autumnIron && resPercent('titanium') < 0.95 && titaniumProfit > titanium.perTickCached;
				}
				let solar = game.religion.getSolarRevolutionRatio();
				if (game.bld.get('calciner').val > 1 && solar > 3 && !game.religion.getRU("basilica").on) {prof = false;}
				let spice = resMap['spice'].value + 60 * game.getResourcePerTick('spice', true) < 0;
				tick = (spice && game.calendar.festivalDays && game.prestige.getPerk("numeromancy").researched) ? true : 0;
			}

			return tick === true || (cost <= profit && prof);
		},
		getAverageTrade: function (race) {
			// standingRatio
			let standRat = game.getEffect("standingRatio") + game.diplomacy.calculateStandingFromPolicies(race.name, game);
			// raceRatio
			let rRatio = 1 + race.energy * 0.02;
			// tradeRatio
			let tRatio = 1 + game.diplomacy.getTradeRatio() + game.diplomacy.calculateTradeBonusFromPolicies(race.name, game) + game.challenges.getChallenge("pacifism").getTradeBonusEffect(game);
			let failedRat = (race.standing < 0) ? (race.standing + standRat) : 0;
			let successRat = (failedRat < 0) ? (1 + failedRat) : 1;
			let bonusRat = (race.standing > 0) ? Math.min(race.standing + standRat / 2, 1) : 0;

			let output = {};
			for (let item of race.sells) {
				//var item = race.sells[s];
				if (!this.isValidTrade(item, race)) {continue;}
				//var resource = this.craftManager.getResource(item.name);
				let mean = 0;
				let tradeChance = (item.minLevel) ? item.chance * (1 + game.getLimitedDR(0.01 * race.embassyLevel, 0.75)) : item.chance;
				let sRatio = (item.seasons) ? 1 + item.seasons[game.calendar.getCurSeason().name] : 1;
				let normBought = (successRat - bonusRat) * Math.min(tradeChance, 1);
				let normBonus = bonusRat * Math.min(tradeChance, 1);
				mean = (normBought + 1.25 * normBonus) * item.value * rRatio * sRatio * tRatio;
				output[item.name] = mean;
			}
			if (race.name === "zebras") {
				let shipCount = game.resPool.get("ship").value;
				let zebraRelationModifierTitanium = game.getEffect("zebraRelationModifier") * game.bld.getBuildingExt("tradepost").meta.effects["tradeRatio"];
				let titanProb = Math.min(0.15 + shipCount * 0.0035, 1);
				//let modifier = (shipCount < 230) ? Math.log(shipCount) * shipCount * 0.00084 - 0.01 : 1;
				output["titanium"] = (1.5 + shipCount * 0.03) * (1 + zebraRelationModifierTitanium) * titanProb * successRat;
				if (game.religion.getSolarRevolutionRatio() < 1 && shipCount < 40 && game.getEffect('titaniumPerTickAutoprod') < 0.002) {output["titanium"] = 0;}
			}

			let spiceChance = (race.embassyPrices) ? 0.35 * (1 + 0.01 * race.embassyLevel) : 0.35;
			let spiceTradeAmount = successRat * Math.min(spiceChance, 1);
			output['spice'] = 25 * spiceTradeAmount + 50 * spiceTradeAmount * tRatio / 2;

			output['blueprint'] = 0.1 * successRat;

			return output;
		},
		isValidTrade: function (item, race) {
			return (!(item.minLevel && race.embassyLevel < item.minLevel)
				&& (game.resPool.get(item.name).unlocked || item.name === 'titanium' || item.name === 'uranium' || race.name === 'leviathans'));
		},
		getLowestTradeAmount: function (name, limited, trigConditions) {
			let total, amount, highestCapacity, i;
			let materials = this.getMaterials(name);
			let race = this.getRace(name);

			for (i in materials) {
				if (i === "manpower") {
					const manpowerValue = Math.max(this.craftManager.getValueAvailable(i, true) - 100, 0);
					total = manpowerValue / materials[i];
				} else {
					total = this.craftManager.getValueAvailable(i, !limited, options.auto.trade.trigger) / materials[i];
				}

				amount = (amount === undefined || total < amount) ? total : amount;
			}

			amount = Math.floor(amount);

			if (amount === 0) {return 0;}

			if (race === null || options.auto.trade.items[name].allowCapped) {return amount;}

			// Loop through the items obtained by the race, and determine
			// which good has the most space left. Once we've determined this,
			// reduce the amount by this capacity. This ensures that we continue to trade
			// as long as at least one resource has capacity, and we never over-trade.

			let tradeOutput = this.getAverageTrade(race);
			for (let s in race.sells) {
				let item = race.sells[s];
				let resource = this.craftManager.getResource(item.name);
				let max = 0;

				// No need to process resources that don't cap
				if (!resource.maxValue) {continue;}

				max = tradeOutput[item.name];

				let capacity = Math.max((resource.maxValue - resource.value) / max, 0);

				highestCapacity = (capacity < highestCapacity) ? highestCapacity : capacity;
			}

			// We must take the ceiling of capacity so that we will trade as long
			// as there is any room, even if it doesn't have exact space. Otherwise,
			// we seem to starve trading altogether.
			highestCapacity = Math.ceil(highestCapacity);

			if (highestCapacity === 0) {return 0;}

			// Now that we know the most we *should* trade for, check to ensure that
			// we trade for our max cost, or our max capacity, whichever is lower.
			// This helps us prevent trading for resources we can't store. Note that we
			// essentially ignore blueprints here. In addition, if highestCapacity was never set,
			// then we just

			amount = (highestCapacity < amount) ? Math.max(highestCapacity - 1, 1) : amount;

			return Math.floor(amount);
		},
		getMaterials: function (name) {
			let modifier = (game.challenges.isActive("postApocalypse")) ? game.bld.getPollutionLevel() : 1;
			let materials = {
				manpower: modifier * (50 - game.getEffect("tradeCatpowerDiscount")),
				gold: modifier * (15 - game.getEffect("tradeGoldDiscount"))
			};

			if (name === undefined) {return materials;}

			let prices = this.getRace(name).buys;

			for (const i in prices) {
				let price = prices[i];

				materials[price.name] = price.val;
			}

			return materials;
		},
		getRace: function (name) {
			if (name === undefined) {return null;} else {return game.diplomacy.get(name);}
		},
		getTradeButton: function (race) {
			for (let i in this.manager.tab.racePanels) {
				let panel = this.manager.tab.racePanels[i];

				if (panel.race.name === race) {return panel.tradeBtn;}
			}
		},
		singleTradePossible: function (name) {
			let materials = this.getMaterials(name);
			for (let mat in materials) {
				if (this.craftManager.getValueAvailable(mat, true) < materials[mat]) {return false;}
			}
			return true;
		}
	};

	// Cache Manager
	// ===============

	let CacheManager = function () {};

	CacheManager.prototype = {
		pushToCache: function (data) {
			let cacheSum = options.auto.cache.cacheSum;
			let materials = data['materials'];
			for (let mat in materials) {
				if (!cacheSum[mat]) {cacheSum[mat] = 0;}
				cacheSum[mat] += materials[mat];
			}
		},
		getResValue: function (res) {
			let cache = options.auto.cache;
			let dataTimer = cache.dataTimer;
			let cacheSum = cache.cacheSum;
			if (!cacheSum[res]) {return 0;}
			let startingTick = dataTimer.ticksTotal;
			let currentTick = game.timer.ticksTotal;
			let value = cacheSum[res] / (currentTick - startingTick);

			return value;
		},
		checkForTimer: function () {
			let cache = options.auto.cache;
			let dataTimer = cache.dataTimer;
			let currentTick = game.timer.ticksTotal;
			let startingTick = dataTimer.ticksTotal;
			let trueYear = game.calendar.trueYear();
			let guid = game.telemetry.guid;
			if (currentTick - startingTick < 0 || dataTimer['trueYear'] + 1 < trueYear || dataTimer['saveId'] !== guid) {
				cache.dataTimer = null;
				cache.dataTimer = {};
				cache.cacheSum = null;
				cache.cacheSum = {};
				let dataTimer = cache.dataTimer;
				dataTimer['saveId'] = guid;
				dataTimer['ticksTotal'] = currentTick;
				dataTimer['trueYear'] = trueYear;
				return 0;
			}
			if (currentTick - startingTick > 2e4) {
				dataTimer.ticksTotal = currentTick;
			}
		}
	};

	// ==============================
	// Configure overall page display
	// ==============================

	let right = $('#rightColumn');

	let addRule = function (rule) {
		const sheets = document.styleSheets;
		sheets[0].insertRule(rule, 0);
	};

	let defaultSelector = 'body[data-ks-style]:not(.scheme_sleek)';

	// 插入cssRule
	if (addRule) {
		addRule('body {' // low priority. make sure it can be covered by the theme
			+ 'font-family: inherit;'
			+ 'font-size: inherit;'
			+ '}');

		addRule(defaultSelector + ' #game {'
			// + 'font-family: monospace;'
			// + 'font-size: 12px;'
			+ 'min-width: 1300px;'
			+ 'top: 32px;'
			+ '}');

		// addRule(defaultSelector + ' {'
		//     + 'font-family: monospace;'
		//     + 'font-size: 12px;'
		//     + '}');

		addRule(defaultSelector + ' .column {'
			+ 'min-height: inherit;'
			+ 'max-width: inherit !important;'
			+ 'padding: 1%;'
			+ 'margin: 0;'
			+ 'overflow-y: auto;'
			+ '}');

		addRule(defaultSelector + ' #leftColumn {'
			+ 'height: 92%;'
			+ 'width: 26%;'
			+ '}');

		addRule(defaultSelector + ' #midColumn {'
			+ 'margin-top: 1% !important;'
			+ 'height: 90%;'
			+ 'width: 48%;'
			+ '}');

		addRule(defaultSelector + ' #rightColumn {'
			+ 'overflow-y: auto;'
			+ 'height: 92%;'
			+ 'width: 19%;'
			+ 'font-size: 12px;'
			+ 'font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;'
			+ '}');

		addRule('body #gamePageContainer #game #rightColumn {'
			+ 'overflow-y: auto;'
			+ '}');

		// addRule(defaultSelector + ' #gameLog .msg {'
		//     + 'display: block;'
		//     + '}');

		addRule(defaultSelector + ' #gameLog {'
			+ 'overflow-y: hidden !important;'
			+ 'width: 100% !important;'
			+ 'padding-top: 5px !important;'
			+ '}');

		addRule(defaultSelector + ' #resContainer .maxRes {'
			+ 'color: #676766;'
			+ '}');

		addRule(defaultSelector + ' #game .btn {'
			+ 'border-radius: 0px;'
			+ 'font-family: monospace;'
			+ 'font-size: 12px !important;'
			+ 'margin: 0 5px 7px 0;'
			+ 'width: 290px;'
			+ '}');

		addRule(defaultSelector + ' #game .map-viewport {'
			+ 'height: 340px;'
			+ 'max-width: 500px;'
			+ 'overflow: visible;'
			+ '}');

		addRule(' #game .map-dashboard {'
			+ 'height: 120px;'
			+ 'width: 292px;'
			+ '}');

		addRule('#ks-options ul {'
			+ 'list-style: none;'
			+ 'margin: 0 0 5px;'
			+ 'padding: 0;'
			+ '}');

		addRule('#ks-options ul:after {'
			+ 'clear: both;'
			+ 'content: " ";'
			+ 'display: block;'
			+ 'height: 0;'
			+ '}');

		addRule('#ks-options ul li {'
			+ 'display: block;'
			+ 'float: left;'
			+ 'width: 100%;'
			+ '}');

		addRule('#ks-options #toggle-list-resources .stockWarn *,'
			+ '#ks-options #toggle-reset-list-resources .stockWarn * {'
			+ 'color: ' + options.stockwarncolor + ';'
			+ '}');

		addRule('.right-tab {'
			+ 'height: unset !important;'
			+ '}');
	}

	// Local Storage
	// =============

	let kittenStorageVersion = 3;

	let kittenStorage = {
		version: kittenStorageVersion,
		toggles: {},
		items: {},
		resources: {},
		triggers: {},
		reset: {
			reset: false,
			times: 0,
			paragonLastTime: 0,
			paragonTotal: 0,
			karmaLastTime: 0,
			karmaTotal: 0
		},
		policies: []
	};

	let toggles = ['build','space','craft','upgrade','trade','faith','time','timeCtrl','distribute','options','filter'];
	let initializeKittenStorage = function () {
		toggles.forEach((name) => {
			$("#items-list-" + name).find("input[id^='toggle-']").each(function () {
				let dom = $(this);
				if ($(this).attr("type") !== 'radio') {
					kittenStorage.items[dom.attr("id")] = dom.prop("checked");
				}
			});
		});
		kittenStorage.items['toggle-leaderJob-farmer'] = true;
		kittenStorage.items['toggle-leaderTrait-manager'] = true;
		saveToKittenStorage();
	};

	let saveToKittenStorage = function () {
		kittenStorage.toggles = {
			build: options.auto.build.enabled,
			space: options.auto.space.enabled,
			craft: options.auto.craft.enabled,
			upgrade: options.auto.upgrade.enabled,
			trade: options.auto.trade.enabled,
			faith: options.auto.faith.enabled,
			time: options.auto.time.enabled,
			timeCtrl: options.auto.timeCtrl.enabled,
			distribute: options.auto.distribute.enabled,
			options: options.auto.options.enabled,
			filter: options.auto.filter.enabled
		};
		kittenStorage.resources = options.auto.resources;
		kittenStorage.triggers = {
			faith: options.auto.faith.trigger,
			time: options.auto.time.trigger,
			build: options.auto.build.trigger,
			space: options.auto.space.trigger,
			craft: options.auto.craft.trigger,
			trade: options.auto.trade.trigger
		};
		kittenStorage.policies = options.policies;

		localStorage['cbc.kitten-scientists'] = JSON.stringify(kittenStorage);
	};

	let loadFromKittenStorage = function () {
		let saved = JSON.parse(localStorage['cbc.kitten-scientists'] || 'null');
		if (!saved || saved.version > kittenStorageVersion) {
			initializeKittenStorage();
			return;
		}

		if (saved.version === 1) {
			saved.version = 2;
			saved.reset = {
				reset: false,
				times: 0,
				paragonLastTime: 0,
				paragonTotal: 0,
				karmaLastTime: 0,
				karmaTotal: 0
			};
		}

		if (saved.version === 2) {
			saved.version = 3;
			saved.policies = [];
		}

		if (saved.version === kittenStorageVersion) {
			kittenStorage = saved;
			let el;
			if (saved.toggles) {
				for (const toggle in saved.toggles) {
					if (toggle !== 'engine' && options.auto[toggle]) {
						options.auto[toggle].enabled = !!saved.toggles[toggle];
						el = $('#toggle-' + toggle);
						el.prop('checked', options.auto[toggle].enabled);
					}
				}
			}

			for (const item in kittenStorage.items) {
				let value = kittenStorage.items[item];
				el = $('#' + item);
				let option = el.data('option');
				let name = item.split('-');

				if (option === undefined) {
					delete kittenStorage.items[item];
					continue;
				}

				if (name[0] === 'set') {
					el[0].title = value;
					if (name[name.length - 1] === 'max') {
						el.text(i18n('ui.max', [value]));
					} else if (name[name.length - 1] === 'min') {
						el.text(i18n('ui.min', [value]));
					}
				} else {
					el.prop('checked', value);
				}

				if (name.length === 2) {
					option.enabled = value;
				} else if (name[1] === 'reset' && name.length >= 4) {
					let type = name[2];
					let itemName = name[3];
					switch (name[0]) {
						case 'toggle':
							options.auto[type].items[itemName].checkForReset = value;
							break;
						case 'set':
							options.auto[type].items[itemName].triggerForReset = value;
							break;
					}
				} else {
					if (name[1] === 'limited') {
						option.limited = value;
					} else if (name[1] === 'leaderJob') {
						option[name[1]] = name[2];
					} else if (name[1] === 'leaderTrait') {
						option[name[1]] = name[2];
					} else {
						option[name[2]] = value;
					}
				}
			}

			let resourcesList = $("#toggle-list-resources");
			let resetList = $("#toggle-reset-list-resources");
			for (const resource in kittenStorage.resources) {
				let res = kittenStorage.resources[resource];

				if (res.enabled) {
					if ($('#resource-' + resource).length === 0) {resourcesList.append(addNewResourceOption(resource));}
					if ('stock' in res) {setStockValue(resource, res.stock);}
					if ('consume' in res) {setConsumeRate(resource, res.consume);}
				}
				if (res.checkForReset) {
					if ($('#resource-reset-' + resource).length === 0) {resetList.append(addNewResourceOption(resource, undefined, true));}
					if ('stockForReset' in res) {setStockValue(resource, res.stockForReset ? res.stockForReset : Infinity, true);}
				}
			}

			if (saved.triggers) {
				options.auto.faith.trigger = saved.triggers.faith;
				options.auto.time.trigger = saved.triggers.time;
				options.auto.build.trigger = saved.triggers.build;
				options.auto.space.trigger = saved.triggers.space;
				options.auto.craft.trigger = saved.triggers.craft;
				options.auto.trade.trigger = saved.triggers.trade;

				$('#trigger-faith')[0].title = options.auto.faith.trigger;
				$('#trigger-time')[0].title = options.auto.time.trigger;
				$('#trigger-build')[0].title = options.auto.build.trigger;
				$('#trigger-space')[0].title = options.auto.space.trigger;
				$('#trigger-craft')[0].title = options.auto.craft.trigger;
				$('#trigger-trade')[0].title = options.auto.trade.trigger;
			}
			options.policies = saved.policies;
		}
	};

	// Add options element
	// ===================

	let ucfirst = function (string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	};

	let roundToTwo = function (n) {
		return +(Math.round(+(n + "e+2")) + "e-2");
	};

	let setStockWarning = function(name, value, forReset = false) {
		// simplest way to ensure it doesn't stick around too often; always do
		// a remove first then re-add only if needed
		let path = forReset ? '#resource-reset-' + name : '#resource-' + name;
		$(path).removeClass("stockWarn");

		let maxValue = game.resPool.resources.filter(i => i.name === name)[0].maxValue;
		if ((value > maxValue && !(maxValue === 0)) || value === Infinity) {$(path).addClass("stockWarn");}
	};

	let setStockValue = function (name, value, forReset = false) {
		let path;
		let n = Number(value);

		if (isNaN(n) || n < 0) {
			warning('ignoring non-numeric or invalid stock value ' + value);
			return;
		}

		if (!options.auto.resources[name]) {options.auto.resources[name] = {};}
		if (forReset) {
			path = '#resource-reset-' + name + ' #stock-value-' + name;
			n = n < 0 ? Infinity : n;
			options.auto.resources[name].checkForReset = true;
			options.auto.resources[name].stockForReset = n;
		} else {
			path = '#resource-' + name + ' #stock-value-' + name;
			options.auto.resources[name].enabled = true;
			options.auto.resources[name].stock = n;
		}
		$(path).text(i18n('resources.stock', [n === Infinity ? '∞' : game.getDisplayValueExt(n)]));

		setStockWarning(name, n, forReset);
	};

	let setConsumeRate = function (name, value) {
		let n = parseFloat(value);

		if (isNaN(n) || n < 0.0 || n > 1.0) {
			warning('ignoring non-numeric or invalid consume rate ' + value);
			return;
		}

		if (!options.auto.resources[name]) {options.auto.resources[name] = {};}
		options.auto.resources[name].consume = n;
		$('#consume-rate-' + name).text(i18n('resources.consume', [n.toFixed(2)]));
	};

	let removeResourceControl = function (name, forReset = false) {
		let opt = options.auto.resources[name];
		if (forReset) {opt.checkForReset = false;} else {opt.enabled = false;}

		if (!opt.enabled && !opt.checkForReset) {delete options.auto.resources[name];}
	};

	let addNewResourceOption = function (name, title, forReset = false) {
		let stock;
		title = title || game.resPool.get(name).title || ucfirst(name);
		let res = options.auto.resources[name];
		if (forReset && res && res.stockForReset) {
			stock = res.stockForReset;} else if (!forReset && res && res.stock) {
			stock = res.stock;} else {
			stock = 0;}
		let consume = res && (res.consume !== undefined) ? res.consume : options.consume;

		let container = $('<div/>', {
			id: (forReset ? 'resource-reset-' : 'resource-') + name,
			css: {display: 'inline-block', width: '100%'},
		});

		let label = $('<div/>', {
			id: 'resource-label-' + name,
			text: title,
			css: {display: 'inline-block', width: '95px'},
		});

		stock = $('<div/>', {
			id: 'stock-value-' + name,
			text: i18n('resources.stock', [stock === Infinity ? '∞' : game.getDisplayValueExt(stock)]),
			css: {cursor: 'pointer', display: 'inline-block', width: '80px'},
		});

		consume = $('<div/>', {
			id: 'consume-rate-' + name,
			text: i18n('resources.consume', [consume.toFixed(2)]),
			css: {cursor: 'pointer', display: 'inline-block'},
		});

		let del = $('<div/>', {
			id: 'resource-delete-' + name,
			text: i18n('resources.del'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray'},
		});

		if (forReset) {container.append(label, stock, del);} else {container.append(label, stock, consume, del);}

		// once created, set color if relevant
		if (res !== undefined && res.stock !== undefined) {setStockWarning(name, res.stock);}

		(function (stock, forReset) {
			stock.on('click', function () {
				engine.stop(false);
				let value = window.prompt(i18n('resources.stock.set', [title]));
				if (options.auto.engine.enabled) {
					engine.start(false);
				}
				if (value !== null) {
					setStockValue(name, value, forReset);
					saveToKittenStorage();
				}
			});
		})(stock, forReset);

		consume.on('click', function () {
			engine.stop(false);
			let value = window.prompt(i18n('resources.consume.set', [title]));
			if (options.auto.engine.enabled) {
				engine.start(false);
			}
			if (value !== null) {
				setConsumeRate(name, value);
				saveToKittenStorage();
			}
		});

		(function (del, forReset) {
			del.on('click', function () {
				if (window.confirm(i18n('resources.del.confirm', [title]))) {
					container.remove();
					removeResourceControl(name, forReset);
					saveToKittenStorage();
				}
			});
		})(del, forReset);

		return container;
	};

	let getAvailableResourceOptions = function (forReset) {
		let items = [];
		let idPrefix = forReset ? '#resource-reset-' : '#resource-';

		for (let i in game.resPool.resources) {
			let res = game.resPool.resources[i];

			// Show only new resources that we don't have in the list and that are
			// visible. This helps cut down on total size.
			if (res.name && $(idPrefix + res.name).length === 0) {
				let item = $('<div/>', {
					id: 'resource-add-' + res.name,
					text: ucfirst(res.title ? res.title : res.name),
					css: {cursor: 'pointer',
						textShadow: '3px 3px 4px gray'},
				});

				// Wrapper function needed to make closure work
				(function (res, item, forReset) {
					item.on('click', function () {
						item.remove();
						if (!options.auto.resources[res.name]) {options.auto.resources[res.name] = {};}
						if (forReset) {
							options.auto.resources[res.name].checkForReset = true;
							options.auto.resources[res.name].stockForReset = Infinity;
							$('#toggle-reset-list-resources').append(addNewResourceOption(res.name, res.title, forReset));

						} else {
							options.auto.resources[res.name].enabled = true;
							options.auto.resources[res.name].stock = 0;
							options.auto.resources[res.name].consume = options.consume;
							$('#toggle-list-resources').append(addNewResourceOption(res.name, res.title, forReset));
						}
						saveToKittenStorage();
					});
				})(res, item, forReset);

				items.push(item);
			}
		}

		return items;
	};

	let getResourceOptions = function (forReset = false) {
		let list = $('<ul/>', {
			id: forReset ? 'toggle-reset-list-resources' : 'toggle-list-resources',
			css: {display: 'none', paddingLeft: '20px'}
		});

		let add = $('<div/>', {
			id: 'resources-add',
			text: i18n('resources.add'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				textShadow: '3px 3px 4px gray',
				borderBottom: '1px solid rgba(185, 185, 185, 0.7)' },
		});

		let clearunused = $('<div/>', {
			id: 'resources-clear-unused',
			text: i18n('resources.clear.unused'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray' },
		});

		clearunused.on('click', function () {
			for (let name in options.auto.resources) {
				// Only delete resources with unmodified values. Require manual
				// removal of resources with non-standard values.
				if (!options.auto.resources[name].stock &&
					options.auto.resources[name].consume === options.consume ||
					options.auto.resources[name].consume === undefined) {
					$('#resource-' + name).remove();
				}
			}
		});

		let allResources = $('<ul/>', {
			id: 'available-resources-list',
			css: {display: 'none', paddingLeft: '20px'}
		});

		(function (add, forReset) {
			add.on('click', function () {
				allResources.toggle();
				allResources.empty();
				allResources.append(getAvailableResourceOptions(forReset));
			});
		})(add, forReset);

		if (forReset) {list.append(add, allResources);} else {list.append(add, clearunused, allResources);}

		// Add all the current resources
		for (let name in options.auto.resources) {
			let res = options.auto.resources[name];
			if ((forReset && res.checkForReset) || (!forReset && res.enabled)) {list.append(addNewResourceOption(name, undefined, forReset));}
		}

		return list;
	};

	let getOptionHead = function (toggleName) {
		let list = $('<ul/>', {
			id: 'items-list-' + toggleName,
			css: {display: 'none', paddingLeft: '20px'}
		});

		let disableAll = $('<div/>', {
			id: 'toggle-all-items-' + toggleName,
			text: i18n('ui.disable.all'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				textShadow: '3px 3px 4px gray',
				marginRight: '8px'}
		});

		disableAll.on('click', function () {
			// can't use find as we only want one layer of checkboxes
			let items = list.children().children(':checkbox');
			items.prop('checked', false);
			items.change();
			list.children().children(':checkbox').change();
		});

		list.append(disableAll);

		let enableAll = $('<div/>', {
			id: 'toggle-all-items-' + toggleName,
			text: i18n('ui.enable.all'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				textShadow: '3px 3px 4px gray'}
		});

		enableAll.on('click', function () {
			// can't use find as we only want one layer of checkboxes
			let items = list.children().children(':checkbox');
			items.prop('checked', true);
			items.change();
			list.children().children(':checkbox').change();
		});

		list.append(enableAll);
		return list;
	};

	let getAdditionOptions = function () {
		let toggleName = 'faith-addition';
		let list = getOptionHead(toggleName);

		let addi = options.auto.faith.addition;
		for (let itemName in addi) {
			let node = getOption(itemName, addi[itemName]);

			if (itemName === 'bestUnicornBuilding') {
				node.children('label').prop('title', i18n('option.faith.best.unicorn.desc'));
				let input = node.children('input');
				input.unbind('change');
				input.on('change', (e) => {
					let bub = addi.bestUnicornBuilding;
					if (e.target.checked && !bub.enabled) {
						bub.enabled = true;
						// enable all unicorn buildings
						//for (var unicornName in options.auto.unicorn.items) {
						//	var building = $('#toggle-' + unicornName);
						//	building.prop('checked', true);
						//	building.trigger('change');
						//}
						imessage('status.sub.enable', [i18n('option.faith.best.unicorn')]);
						imessage('option.faith.best.unicorn.desc');
					} else if (!e.target.checked && bub.enabled) {
						bub.enabled = false;
						imessage('status.sub.disable', [i18n('option.faith.best.unicorn')]);
					}
					kittenStorage.items[e.target.id] = bub.enabled;
					saveToKittenStorage();
				});
			}

			if (addi[itemName].subTrigger !== undefined) {

				let triggerButton = $('<div/>', {
					id: 'set-' + itemName + '-subTrigger',
					text: i18n('ui.trigger'),
					title: addi[itemName].subTrigger,
					css: {cursor: 'pointer',
						display: 'inline-block',
						float: 'right',
						paddingRight: '5px',
						textShadow: '3px 3px 4px gray'}
				}).data('option', addi[itemName]);

				(function (itemName, triggerButton) {
					if (itemName === 'adore') {
						triggerButton.on('click', function () {
							let value;
							engine.stop(false);
							value = window.prompt(i18n('adore.trigger.set'), addi[itemName].subTrigger);
							if (options.auto.engine.enabled) {
								engine.start(false);
							}

							if (value !== null) {
								addi[itemName].subTrigger = parseFloat(value);
								kittenStorage.items[triggerButton[0].id] = addi[itemName].subTrigger;
								saveToKittenStorage();
								triggerButton[0].title = addi[itemName].subTrigger;
							}
						});

					} else if (itemName === 'autoPraise') {
						triggerButton.on('click', function () {
							let value;
							engine.stop(false);
							value = window.prompt(i18n('parise.trigger.set', [i18n('option.praise')]), addi[itemName].subTrigger);
							if (options.auto.engine.enabled) {
								engine.start(false);
							}

							if (value !== null) {
								addi[itemName].subTrigger = parseFloat(value);
								kittenStorage.items[triggerButton[0].id] = addi[itemName].subTrigger;
								saveToKittenStorage();
								triggerButton[0].title = addi[itemName].subTrigger;
							}
						});
					}
				})(itemName, triggerButton);
				node.append(triggerButton);
			}

			list.append(node);
		}

		return list;
	};

	let getToggle = function (toggleName) {
		let list, itemName, toggle, button;
		let itext = ucfirst(i18n('ui.' + toggleName));

		let auto = options.auto[toggleName];
		let element = $('<li/>', {id: 'ks-' + toggleName});

		let label = $('<label/>', {
			'for': 'toggle-' + toggleName,
			text: itext
		});

		let input = $('<input/>', {
			id: 'toggle-' + toggleName,
			type: 'checkbox'
		});

		if (auto.enabled) {
			input.prop('checked', true);
		}

		// engine needs a custom toggle
		if (toggleName !== 'engine') {
			input.on('change', function () {
				if (input.is(':checked') && !auto.enabled) {
					auto.enabled = true;
					if (toggleName === 'filter' || toggleName === 'options') {
						imessage('status.sub.enable', [itext]);
					} else {
						imessage('status.auto.enable', [itext]);
					}
					saveToKittenStorage();
				} else if ((!input.is(':checked')) && auto.enabled) {
					auto.enabled = false;
					if (toggleName === 'filter' || toggleName === 'options') {
						imessage('status.sub.disable', [itext]);
					} else {
						imessage('status.auto.disable', [itext]);
					}
					saveToKittenStorage();
				}
			});
		}

		element.append(input, label);

		if (auto.items) {
			// Add a border on the element
			element.css('borderBottom', '1px  solid rgba(185, 185, 185, 0.7)');

			toggle = $('<div/>', {
				css: {display: 'inline-block', float: 'right'}
			});

			button = $('<div/>', {
				id: 'toggle-items-' + toggleName,
				text: i18n('ui.items'),
				css: {
					cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'
				}
			});

			element.append(button);

			list = getOptionHead(toggleName);

			// merge unicorn to faith
			if (toggleName === 'faith') {
				for (itemName in options.auto.unicorn.items) {list.append(getOption(itemName, options.auto.unicorn.items[itemName]));}
			}

			// fill out list with toggle items
			for (itemName in auto.items) {
				switch (toggleName) {
					case 'trade':
						list.append(getTradeOption(itemName, auto.items[itemName]));
						break;
					case 'craft':
						list.append(getCraftOption(itemName, auto.items[itemName]));
						break;
					case 'timeCtrl':
						list.append(getTimeCtrlOption(itemName, auto.items[itemName]));
						break;
					case 'options':
						list.append(getOptionsOption(itemName, auto.items[itemName]));
						break;
					case 'upgrade':
						list.append(getUpgradeOption(itemName, auto.items[itemName]));
						break;
					case 'distribute':
						list.append(getDistributeOption(itemName, auto.items[itemName]));
						break;
					case 'build':
					case 'faith':
					case 'space':
						list.append(getLimitedOption(itemName, auto.items[itemName]));
						break;
					case 'time':
						list.append(getLimitedOption(itemName, auto.items[itemName]));
						break;
					default:
						list.append(getOption(itemName, auto.items[itemName]));
						break;

				}
			}

			button.on('click', function () {
				list.toggle();
			});
		}

		if (auto.trigger !== undefined) {
			let triggerButton = $('<div/>', {
				id: 'trigger-' + toggleName,
				text: i18n('ui.trigger'),
				title: auto.trigger,
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			});

			triggerButton.on('click', function () {
				let value;
				engine.stop(false);
				if (toggleName === 'faith') {
					value = window.prompt(i18n('ui.trigger.set', [itext + "(" + $I("resources.faith.title") + ")"]), auto.trigger.toString());
				} else if (toggleName === 'trade') {
					value = window.prompt(i18n('ui.trigger.set', [itext + " 的触发值\n需同时满足 种族触发资源 和 " + $I("resources.gold.title") + " 的"] ), auto.trigger.toString());
				} else {
					value = window.prompt(i18n('ui.trigger.set', [itext]), auto.trigger.toString());
				}
				if (options.auto.engine.enabled) {
					engine.start(false);
				}

				if (value !== null) {
					auto.trigger = parseFloat(value);
					saveToKittenStorage();
					triggerButton[0].title = auto.trigger;
				}
			});

			element.append(triggerButton);
		}

		if (toggleName === 'craft') {
			// Add resource controls for crafting, sort of hack
			const resources = $('<div/>', {
				id: 'toggle-resource-controls',
				text: i18n('ui.craft.resources'),
				css: {
					cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'
				},
			});

			const resourcesList = getResourceOptions();

			// When we click the items button, make sure we clear resources
			button.on('click', function () {
				resourcesList.toggle(false);
			});

			resources.on('click', function () {
				list.toggle(false);
				resourcesList.toggle();
			});

			element.append(resources);
			element.append(resourcesList);
		} else if (toggleName === 'faith') {
			// Add additional controls for faith, sort of hack again
			const addition = $('<div/>', {
				id: 'toggle-addition-controls',
				text: i18n('ui.faith.addtion'),
				title: "太阳教团的自动化项目",
				css: {
					cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '2px 2px 5px gray'
				},
			});

			const additionList = getAdditionOptions();

			button.on('click', function () {
				additionList.toggle(false);
			});

			addition.on('click', function () {
				list.toggle(false);
				additionList.toggle();
			});

			element.append(addition);

			// disable auto the best unicorn building when unicorn building was disabled
			for (const unicornName in options.auto.unicorn.items) {
				const ub = list.children().children('#toggle-' + unicornName);
				ub.on('change', function(e) {
					if (!$(e.target).is(':checked')) {
						const b = $('#toggle-bestUnicornBuilding');
						b.prop('checked', false);
						b.trigger('change');
					}
				});
			}

			element.append(additionList);
		}

		if (auto.items) {element.append(toggle, list);}

		return element;
	};

	let getTradeOption = function (name, option) {
		let iname = ucfirst(i18n('$trade.race.' + name));

		let element = getOption(name, option, iname);
		element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

		//Limited Trading
		let label = $('<label/>', {
			'for': 'toggle-limited-' + name,
			title: i18n('trade.limited', [iname]),
			text: i18n('ui.limit')
		});

		let input = $('<input/>', {
			id: 'toggle-limited-' + name,
			type: 'checkbox'
		}).data('option', option);

		if (option.limited) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && option.limited === false) {
				option.limited = true;
				imessage('trade.limited', [iname]);
			} else if ((!input.is(':checked')) && option.limited) {
				option.limited = false;
				let require = (option.require === false) ? '资源满足黄金的触发条件就会' : '需同时满足资源黄金和' + game.resPool.get(option.require).title + '的触发条件才';
				imessage('trade.unlimited', [iname, require]);
			}
			kittenStorage.items[input.attr('id')] = option.limited;
			saveToKittenStorage();
		});

		element.append(input, label);
		//Limited Trading End

		let button = $('<div/>', {
			id: 'toggle-seasons-' + name,
			text: i18n('trade.seasons'),
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray'},
		});

		let list = $('<ul/>', {
			id: 'seasons-list-' + name,
			css: {display: 'none', paddingLeft: '20px'}
		});

		// fill out the list with seasons
		list.append(getSeason(name, 'spring', option));
		list.append(getSeason(name, 'summer', option));
		list.append(getSeason(name, 'autumn', option));
		list.append(getSeason(name, 'winter', option));

		button.on('click', function () {
			list.toggle();
		});

		element.append(button, list);

		return element;
	};

	let getSeason = function (name, season, option) {
		let iname = ucfirst(i18n('$trade.race.' + name));
		let iseason = ucfirst(i18n('$calendar.season.' + season));

		let element = $('<li/>');

		let label = $('<label/>', {
			'for': 'toggle-' + name + '-' + season,
			text: ucfirst(iseason)
		});

		let input = $('<input/>', {
			id: 'toggle-' + name + '-' + season,
			type: 'checkbox'
		}).data('option', option);

		if (option[season]) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option[season]) {
				option[season] = true;
				imessage('trade.season.enable', [iname, iseason]);
			} else if ((!input.is(':checked')) && option[season]) {
				option[season] = false;
				imessage('trade.season.disable', [iname, iseason]);
			}
			kittenStorage.items[input.attr('id')] = option[season];
			saveToKittenStorage();
		});

		element.append(input, label);

		return element;
	};

	let getSeasonForTimeSkip = function (season, option) {
		let iseason = ucfirst(i18n('$calendar.season.' + season));

		let element = $('<li/>');

		let label = $('<label/>', {
			'for': 'toggle-timeSkip-' + season,
			text: ucfirst(iseason)
		});

		let input = $('<input/>', {
			id: 'toggle-timeSkip-' + season,
			type: 'checkbox'
		}).data('option', option);

		if (option[season]) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option[season]) {
				option[season] = true;
				imessage('time.skip.season.enable', [iseason]);
			} else if ((!input.is(':checked')) && option[season]) {
				option[season] = false;
				imessage('time.skip.season.disable', [iseason]);
			}
			kittenStorage.items[input.attr('id')] = option[season];
			saveToKittenStorage();
		});

		element.append(input, label);

		return element;
	};

	let getOption = function (name, option, iname) {
		let element = $('<li/>');
		let elementLabel = iname || option.label || ucfirst(name);
		let titleName = i18n('ui.trigger.resource') + ": " + ((game.resPool.get(option.require).title) ? game.resPool.get(option.require).title : i18n('ui.none'));
		if (option.require === undefined) {
			titleName = null;
		}

		let label = $('<label/>', {
			'for': 'toggle-' + name,
			text: elementLabel,
			title: titleName,
			css: {display: 'inline-block', minWidth: '80px'}
		});

		let input = $('<input/>', {
			id: 'toggle-' + name,
			type: 'checkbox'
		}).data('option', option);

		if (option.enabled) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option.enabled) {
				option.enabled = true;
				if (option.filter) {
					imessage('filter.enable', [elementLabel]);
				} else if (option.misc) {
					imessage('status.sub.enable', [elementLabel]);
				} else {
					imessage('status.auto.enable', [elementLabel]);
					if (name === 'wood') {
						imessage('msg.catnip');
					}
				}
			} else if ((!input.is(':checked')) && option.enabled) {
				option.enabled = false;
				if (option.filter) {
					imessage('filter.disable', [elementLabel]);
				} else if (option.misc) {
					imessage('status.sub.disable', [elementLabel]);
				} else {
					imessage('status.auto.disable', [elementLabel]);
				}
			}
			kittenStorage.items[input.attr('id')] = option.enabled;
			if (name !== "saves") {
				saveToKittenStorage();
			}
		});

		element.append(input, label);

		return element;
	};

	let getPoliciesOptions = function (forReset) {
		let items = [];

		for (let i in options.policies) {
			let policy = options.policies[i];
			// typo in game code
			if (policy === 'authocracy') {policy = 'autocracy';}
			items.push($('<div/>', {
				id: 'policy-' + policy,
				text: i18n('$policy.' + policy + '.label'),
				css: {cursor: 'pointer',
					textShadow: '3px 3px 4px gray'}
			}));
		}
		return items;
	};

	let getUpgradeOption = function (name, option) {
		let iname = i18n('ui.upgrade.' + name);
		let element = getOption(name, option, iname);

		if (name === 'policies') {
			let list = $('<ul/>', {
				id: 'items-list-policies',
				css: {display: 'none', paddingLeft: '20px'}
			});

			let loadButton = $('<div/>', {
					id: 'toggle-upgrade-policies-load',
					text: i18n('ui.upgrade.policies.load'),
					css: {
						cursor:'pointer',
						display:'inline-block',
						float:'right',
						paddingRight:'5px',
						textShadow:'3px 3px 4px gray'}
				}
			);

			let showButton = $('<div/>', {
					id: 'toggle-upgrade-policies-show',
					text: i18n('ui.upgrade.policies.show'),
					css: {
						cursor:'pointer',
						display:'inline-block',
						float:'right',
						paddingRight:'5px',
						textShadow:'3px 3px 4px gray'}
				}
			);
			// resetBuildList.append(getResetOption(item, 'build', options.auto.build.items[item]));

			loadButton.on('click', function(){
				const plist = [];
				for (const i in game.science.policies) {
					let policy = game.science.policies[i];
					if (policy.researched) {
						plist.push(policy.name);
					}
				}

				options.policies = plist;
				saveToKittenStorage();

				list.empty();
				list.append(getPoliciesOptions());
			});

			showButton.on('click', function(){
				list.toggle();
				list.empty();
				list.append(getPoliciesOptions());
			});

			element.append(showButton, loadButton, list);
		}

		if (option.subTrigger !== undefined && name === 'missions') {
			let triggerButton = $('<div/>', {
				id: 'set-' + name + '-subTrigger',
				text: i18n('ui.trigger'),
				title: option.subTrigger,
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);

			triggerButton.on('click', function () {
				let value;
				engine.stop(false);
				if (name === 'missions'){value = window.prompt(i18n('ui.trigger.missions.set'), option.subTrigger.toString());} else{value = window.prompt(i18n('ui.trigger.set'), option.subTrigger.toString());}
				if (options.auto.engine.enabled) {
					engine.start(false);
				}

				if (value !== null) {
					option.subTrigger = parseFloat(value);
					kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
					saveToKittenStorage();
					triggerButton[0].title = option.subTrigger;
				}
			});

			element.append(triggerButton);
		}

		if (name === 'upgrades' || name === 'techs') {
			let LimitedLabel = $('<label/>', {
				'for': 'toggle-limited-' + name,
				text: i18n('ui.upgradesLimit')
			});

			let LimitedInput = $('<input/>', {
				id: 'toggle-limited-' + name,
				type: 'checkbox'
			}).data('option', option);

			if (option.limited) {
				LimitedInput.prop('checked', true);
			}

			LimitedInput.on('change', function () {
				if (LimitedInput.is(':checked') && !option.limited) {
					option.limited = true;
					imessage('upgrade.limited', [iname]);
				} else if ((!LimitedInput.is(':checked')) && option.limited) {
					option.limited = false;
					imessage('upgrade.unlimited', [iname]);
				}
				kittenStorage.items[LimitedInput.attr('id')] = option.limited;
				saveToKittenStorage();
			});

			element.append(LimitedInput, LimitedLabel);
		}

		return element;
	};

	let getLimitedOption = function (name, option, iname) {
		let element = $('<li/>');
		let elementLabel = iname || option.label || ucfirst(name);
		let titleName = (game.resPool.get(option.require).title) ? game.resPool.get(option.require).title : i18n('ui.none');

		let label = $('<label/>', {
			'for': 'toggle-' + name,
			text: elementLabel,
			title: i18n('ui.trigger.resource') + ": " + titleName,
			css: {display: 'inline-block', minWidth: '80px'}
		});

		let input = $('<input/>', {
			id: 'toggle-' + name,
			type: 'checkbox'
		}).data('option', option);

		if (option.enabled) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option.enabled) {
				option.enabled = true;
				if (option.filter) {
					imessage('filter.enable', [elementLabel]);
				} else if (option.misc) {
					imessage('status.sub.enable', [elementLabel]);
				} else {
					imessage('status.auto.enable', [elementLabel]);
					if (name === 'field') {
						imessage('msg.catnip');
					}
				}
			} else if ((!input.is(':checked')) && option.enabled) {
				option.enabled = false;
				if (option.filter) {
					imessage('filter.disable', [elementLabel]);
				} else if (option.misc) {
					imessage('status.sub.disable', [elementLabel]);
				} else {
					imessage('status.auto.disable', [elementLabel]);
				}
			}
			kittenStorage.items[input.attr('id')] = option.enabled;
			saveToKittenStorage();
		});

		let maxButton = $('<div/>', {
			id: 'set-' + name + '-max',
			text: i18n('ui.max', [option.max]),
			title: option.max,
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray'}
		}).data('option', option);

		maxButton.on('click', function () {
			let value;
			engine.stop(false);
			value = window.prompt(i18n('ui.max.set', [option.label]), option.max.toString());
			if (options.auto.engine.enabled) {
				engine.start(false);
			}

			if (value !== null) {
				option.max = parseInt(value);
				kittenStorage.items[maxButton.attr('id')] = option.max;
				saveToKittenStorage();
				maxButton[0].title = option.max;
				maxButton[0].innerText = i18n('ui.max', [option.max]);
			}
		});

		element.append(input, label, maxButton);

		return element;
	};

	let getCraftOption = function (name, option) {
		let iname = ucfirst(i18n('$resources.' + name + '.title'));
		if (name === "ship") {
			iname = ucfirst(i18n('$workshop.crafts.' + name + '.label'));
		}

		let element = getOption(name, option, iname);
		if (name === 'parchment') {return element;}

		let label = $('<label/>', {
			'for': 'toggle-limited-' + name,
			title: i18n("craft.limitedTitle"),
			text: i18n('ui.craftLimit')
		});

		let input = $('<input/>', {
			id: 'toggle-limited-' + name,
			type: 'checkbox'
		}).data('option', option);

		if (option.limited) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option.limited) {
				option.limited = true;
				imessage('craft.limited', [iname]);
				msgSummary('craftLimited');
			} else if ((!input.is(':checked')) && option.limited) {
				option.limited = false;
				let require = (option.require) ? resMap[option.require].title + '满足触发资源的触发条件才会制作，' : '无，当资源满足制作条件就会制作';
				imessage('craft.unlimited', [iname, require]);
			}
			kittenStorage.items[input.attr('id')] = option.limited;
			saveToKittenStorage();
		});

		element.append(input, label);

		return element;
	};

	let getCycle = function (index, option) {
		let cycle = game.calendar.cycles[index];
		let element = $('<li/>');

		let label = $('<label/>', {
			'for': 'toggle-timeSkip-' + index,
			text: cycle.title
		});

		let input = $('<input/>', {
			id: 'toggle-timeSkip-' + index,
			type: 'checkbox'
		}).data('option', option);

		if (option[index]) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option[index]) {
				option[index] = true;
				imessage('time.skip.cycle.enable', [cycle.title]);
			} else if ((!input.is(':checked')) && option[index]) {
				option[index] = false;
				imessage('time.skip.cycle.disable', [cycle.title]);
			}
			kittenStorage.items[input.attr('id')] = option[index];
			saveToKittenStorage();
		});

		element.append(input, label);

		return element;
	};

	let getResetOption = function (name, type, option) {
		let element = $('<li/>');
		let elementLabel = option.label;

		let label = $('<label/>', {
			'for': 'toggle-reset-' + type + '-' + name,
			text: elementLabel,
			css: {display: 'inline-block', minWidth: '80px'}
		});

		let input = $('<input/>', {
			id: 'toggle-reset-' + type + '-' + name,
			type: 'checkbox'
		}).data('option', option);

		if (option.checkForReset) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option.checkForReset) {
				option.checkForReset = true;
				imessage('status.reset.check.enable', [elementLabel]);
			} else if ((!input.is(':checked')) && option.checkForReset) {
				option.checkForReset = false;
				imessage('status.reset.check.disable', [elementLabel]);
			}
			kittenStorage.items[input.attr('id')] = option.checkForReset;
			saveToKittenStorage();
		});

		let minButton = $('<div/>', {
			id: 'set-reset-' + type + '-' + name + '-min',
			text: i18n('ui.min', [option.triggerForReset]),
			title: option.triggerForReset,
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray'}
		}).data('option', option);

		minButton.on('click', function () {
			let value;
			value = window.prompt(i18n('reset.check.trigger.set', [option.label]), option.triggerForReset.toString());

			if (value !== null) {
				option.triggerForReset = parseInt(value);
				kittenStorage.items[minButton.attr('id')] = option.triggerForReset;
				saveToKittenStorage();
				minButton[0].title = option.triggerForReset;
				minButton[0].innerText = i18n('ui.min', [option.triggerForReset]);
			}
		});


		element.append(input, label, minButton);

		return element;
	};

	let getTimeCtrlOption = function (name, option) {
		let triggerButton;
		let element = getOption(name, option);

		if (name === 'timeSkip') {
			triggerButton = $('<div/>', {
				id: 'set-timeSkip-subTrigger',
				text: i18n('ui.trigger'),
				title: option.subTrigger,
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);
			triggerButton.on('click', function () {
				let value;
				engine.stop(false);
				value = window.prompt(i18n('time.skip.trigger.set', []), option.subTrigger);
				if (options.auto.engine.enabled) {
					engine.start(false);
				}

				if (value !== null) {
					option.subTrigger = parseFloat(value);
					kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
					saveToKittenStorage();
					triggerButton[0].title = option.subTrigger;
				}
			});

			let maximumButton = $('<div/>', {
				id: 'set-timeSkip-maximum',
				text: i18n('ui.maximum'),
				title: option.max,
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);
			maximumButton.on('click', function () {
				let value;
				engine.stop(false);
				value = window.prompt(i18n('ui.max.set', ["每次燃烧时间水晶"]), option.maximum.toString());
				if (options.auto.engine.enabled) {
					engine.start(false);
				}

				if (value !== null) {
					option.maximum = parseFloat(value);
					kittenStorage.items[maximumButton.attr('id')] = option.maximum;
					saveToKittenStorage();
					maximumButton[0].title = option.maximum;
				}
			});

			let cyclesButton = $('<div/>', {
				id: 'toggle-cycle-' + name,
				text: i18n('ui.cycles'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'},
			});

			let cyclesList = $('<ul/>', {
				id: 'cycles-list-' + name,
				css: {display: 'none', paddingLeft: '20px'}
			});

			for (let i in game.calendar.cycles) {cyclesList.append(getCycle(i, option));}


			let seasonsButton = $('<div/>', {
				id: 'toggle-seasons-' + name,
				text: i18n('trade.seasons'),
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'},
			});


			let seasonsList = $('<ul/>', {
				id: 'seasons-list-' + name,
				css: {display: 'none', paddingLeft: '20px'}
			});

			// fill out the list with seasons
			seasonsList.append(getSeasonForTimeSkip('spring', option));
			seasonsList.append(getSeasonForTimeSkip('summer', option));
			seasonsList.append(getSeasonForTimeSkip('autumn', option));
			seasonsList.append(getSeasonForTimeSkip('winter', option));

			cyclesButton.on('click', function () {
				cyclesList.toggle();
				seasonsList.toggle(false);
			});

			seasonsButton.on('click', function () {
				cyclesList.toggle(false);
				seasonsList.toggle();
			});

			element.append(cyclesButton, seasonsButton, maximumButton, triggerButton, cyclesList, seasonsList);

		} else if (name === 'reset') {

			let item;
			let resetBuildList     = getOptionHead('reset-build');
			let resetSpaceList     = getOptionHead('reset-space');
			let resetResourcesList = getResourceOptions(true);
			let resetReligionList  = getOptionHead('reset-religion');
			let resetTimeList      = getOptionHead('reset-time');

			for (item in options.auto.build.items)              {resetBuildList.append(getResetOption(item, 'build', options.auto.build.items[item]));}
			for (item in options.auto.space.items)              {resetSpaceList.append(getResetOption(item, 'space', options.auto.space.items[item]));}
			for (item in options.auto.unicorn.items)            {resetReligionList.append(getResetOption(item, 'unicorn', options.auto.unicorn.items[item]));}
			for (item in options.auto.faith.items)              {resetReligionList.append(getResetOption(item, 'faith', options.auto.faith.items[item]));}
			for (item in options.auto.time.items)               {resetTimeList.append(getResetOption(item, 'time', options.auto.time.items[item]));}

			let buildButton = $('<div/>', {id: 'toggle-reset-build', text: i18n('ui.build'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
			let spaceButton = $('<div/>', {id: 'toggle-reset-space', text: i18n('ui.space'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
			let resourcesButton = $('<div/>', {id: 'toggle-reset-resources', text: i18n('ui.craft.resources'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
			let religionButton = $('<div/>', {id: 'toggle-reset-religion', text: i18n('ui.faith'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});
			let timeButton = $('<div/>', {id: 'toggle-reset-time', text: i18n('ui.time'),
				css: {cursor:'pointer',display:'inline-block',float:'right',paddingRight:'5px',textShadow:'3px 3px 4px gray'},});

			buildButton.on('click', function(){resetBuildList.toggle(); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle(false);});
			spaceButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle(false);});
			resourcesButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(); resetReligionList.toggle(false); resetTimeList.toggle(false);});
			religionButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(); resetTimeList.toggle(false);});
			timeButton.on('click', function(){resetBuildList.toggle(false); resetSpaceList.toggle(false); resetResourcesList.toggle(false); resetReligionList.toggle(false); resetTimeList.toggle();});

			element.append(buildButton, spaceButton, resourcesButton, religionButton, timeButton,
				resetBuildList, resetSpaceList, resetResourcesList, resetReligionList, resetTimeList);
		} else {
			triggerButton = $('<div/>', {
				id: 'set-' + name + '-subTrigger',
				text: i18n('ui.trigger'),
				title: option.subTrigger,
				css: {
					cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'
				}
			}).data('option', option);

			triggerButton.on('click', function () {
				let value;
				value = window.prompt(i18n('ui.trigger.set', [option.label]), option.subTrigger);

				if (value !== null) {
					option.subTrigger = parseFloat(value);
					kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
					saveToKittenStorage();
					triggerButton[0].title = option.subTrigger;
				}
			});
			element.append(triggerButton);
		}

		return element;
	};

	let getOptionsOption = function (name, option) {
		let input;
		let element = getOption(name, option);

		// hack for style.
		// If there are more UI options, split it to "getUIOption"
		if (name === 'style') {
			input = element.children('input');
			input.unbind('change');
			input.on('change', function (e) {
				option.enabled = input.prop('checked');
				kittenStorage.items[input.attr('id')] = option.enabled;
				if (e.isTrusted) {saveToKittenStorage();}
				let style = document.getElementById('toggleCenter').style;
				if (option.enabled) {
					document.body.setAttribute('data-ks-style', '');
					if (!game.ui.isCenter) {
						style.display = 'none';
					}
				} else {
					document.body.removeAttribute('data-ks-style');
					style.display = '';
				}
			});
		}

		if (name === 'useWorkers') {
			input = element.children('input');
			input.on('click', function () {
				let a = confirm(i18n('ui.trigger.useWorkers.alert'));
				if (a && !option.enabled) {
					engine.stop();
					option.enabled = true;
					kittenStorage.items[input.attr('id')] = option.enabled;
					if (options.auto.engine.enabled) {
						engine.start();
					}
				} else if (a && option.enabled) {
					engine.stop();
					option.enabled = false;
					kittenStorage.items[input.attr('id')] = option.enabled;
					if (options.auto.engine.enabled) {
						engine.start();
					}
				}
			});
		}

		if (name === 'saves') {
			input = element.children('input');
			input.on('click', function () {
				engine.stop(false);
				let confirm = window.confirm("点击确认会导出珂学家的配置.txt文件");
				if (confirm) {
					let $link = $("#download-link");
					let data = JSON.stringify(window.localStorage['cbc.kitten-scientists']);
					let b = game.compressLZData(data, false);
					let blob = new Blob([b], {type: "text/plain"});
					$link.attr("href", window.URL.createObjectURL(blob));
					let filename = "小猫珂学家配置" + (game.stats.getStat("totalResets").val + 1) + "周目";
					$link.attr("download", filename + ".txt");
					$link.get(0).dispatchEvent(new MouseEvent("click"));
				}
				if (options.auto.engine.enabled) {
					engine.start(false);
				}
			});

			let loadKS = $('<div/>', {
				id: 'loadKS',
				text: "导入配置",
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);

			loadKS.on('click', function () {
				engine.stop(false);
				let b = window.prompt('窗口内填入后你需要导入的珂学家配置，确认后会导入配置', '');
				if (options.auto.engine.enabled) {
					engine.start(false);
				}
				if (b && b.length >= 10) {
					let ksSave;
					if (b.charAt(0) !== "{") {
						ksSave = JSON.parse(LZString.decompressFromBase64(b));
					}
					window.localStorage['cbc.kitten-scientists'] = ksSave;
					loadFromKittenStorage();
				}
			});

			let ressetKS = $('<div/>', {
				id: 'ressetKS',
				text: "恢复默认配置",
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);

			ressetKS.on('click', function () {
				if (confirm('确定要初始化珂学家配置吗，点击确认后初始化珂学家配置(有可能会刷新页面)')){
					engine.stop();
					let cbc = sessionStorage.getItem('options');
					delete localStorage['cbc.kitten-scientists'];
					if (cbc) {
						$("#ks-options").remove();
						options.policies = [];
						options['auto'] = JSON.parse(cbc).auto;
						optionsElement = $('<div/>', {id: 'ks-options', css: {marginBottom: '10px'}});
						optionsListElement = $('<ul/>');
						optionsListElement.append(getToggle('engine'));
						if (options.auto.engine.enabled) {
							engine.start();
						}
						toggles.forEach((name) => {
							optionsListElement.append(getToggle(name));
						});
						right.prepend(optionsElement.append(optionsListElement));
						engineOn();
						loadFromKittenStorage();
					} else {
						game.save();
						window.location.reload();
					}
				}
			});

			element.append(loadKS);
			element.append(ressetKS);
		}

		if (name === 'donate') {
			input = element.children('input');
			input.unbind('change');
			input.on('change', function (e) {
				option.enabled = input.prop('checked');
				kittenStorage.items[input.attr('id')] = option.enabled;
				if (e.isTrusted) {saveToKittenStorage();}
				let style = document.getElementById('ks-donate').style;
				if (option.enabled) {
					style.display = 'block';
				} else {
					style.display = 'none';
				}
				style = null;
			});
		}

		if (name === 'wiki') {
			input = element.children('input');
			input.on('click', function () {
				let tempWindow = window.open();
				tempWindow.location = 'https://petercheney.gitee.io/baike/?file=004-%E7%AC%AC%E4%B8%89%E6%96%B9%E5%B7%A5%E5%85%B7/02-%E5%B0%8F%E7%8C%AB%E7%A7%91%E5%AD%A6%E5%AE%B6';
				printoutput(['如果还有问题可以在猫国群询问，有BUG或意见可以联系Cheney。默认配置即推荐配置：文艺复兴玄学下默认配置能2小时冲出轨道。','ks-default', options.activitycolor]);
			});
		}

		if (option.subTrigger !== undefined) {
			let triggerButton = $('<div/>', {
				id: 'set-' + name + '-subTrigger',
				text: i18n('ui.trigger'),
				title: option.subTrigger,
				css: {cursor: 'pointer',
					display: 'inline-block',
					float: 'right',
					paddingRight: '5px',
					textShadow: '3px 3px 4px gray'}
			}).data('option', option);

			triggerButton.on('click', function () {
				let value;
				engine.stop(false);
				if (name === 'crypto') {
					value = window.prompt(i18n('ui.trigger.crypto.set', [option.label]), option.subTrigger);
				} else if (name === 'shipOverride') {
					value = window.prompt(i18n('ui.trigger.shipOverride.set', [option.label]), option.subTrigger);
				} else {
					value = window.prompt(i18n('ui.trigger.set', [option.label]), option.subTrigger);
				}
				if (options.auto.engine.enabled) {
					engine.start(false);
				}

				if (value !== null) {
					if (name === 'crypto') {
						option.subTrigger = value;
					} else {
						option.subTrigger = parseFloat(value);
					}
					kittenStorage.items[triggerButton.attr('id')] = option.subTrigger;
					saveToKittenStorage();
					triggerButton[0].title = option.subTrigger;
				}
			});

			element.append(triggerButton);
		}

		return element;
	};

	let getDistributeOption = function (name, option) {
		if (name === "leader") {return getLeader(name, option);}
		let iname = ucfirst(i18n('$village.job.' + name));

		let element = getOption(name, option, iname);
		element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

		//Limited Distribution
		let label = $('<label/>', {
			'for': 'toggle-limited-' + name,
			text: i18n('ui.limit')
		});

		let input = $('<input/>', {
			id: 'toggle-limited-' + name,
			type: 'checkbox'
		}).data('option', option);

		if (option.limited) {
			input.prop('checked', true);
		}

		input.on('change', function () {
			if (input.is(':checked') && !option.limited) {
				option.limited = true;
				imessage('distribute.limited', [iname]);
			} else if ((!input.is(':checked')) && option.limited) {
				option.limited = false;
				imessage('distribute.unlimited', [iname]);
			}
			kittenStorage.items[input.attr('id')] = option.limited;
			saveToKittenStorage();
		});

		element.append(input, label);

		let maxButton = $('<div/>', {
			id: 'set-' + name + '-max',
			text: i18n('ui.max', [option.max]),
			title: option.max,
			css: {cursor: 'pointer',
				display: 'inline-block',
				float: 'right',
				paddingRight: '5px',
				textShadow: '3px 3px 4px gray'}
		}).data('option', option);

		(function (iname){
			maxButton.on('click', function () {
				let value;
				engine.stop(false);
				value = window.prompt(i18n('ui.max.set', [iname]), option.max.toString());
				if (options.auto.engine.enabled) {
					engine.start(false);
				}

				if (value !== null) {
					option.max = Math.max(0, parseInt(value));
					kittenStorage.items[maxButton.attr('id')] = option.max;
					saveToKittenStorage();
					maxButton[0].title = option.max;
					maxButton[0].innerText = i18n('ui.max', [option.max]);
				}
			});
		})(iname);

		element.append(maxButton);

		return element;
	};

	let getLeader = function (name, option) {
		let i;
		let iname = ucfirst(i18n('distribute.makeLeader'));
		let element = getOption(name, option, iname);
		element.css('borderBottom', '1px solid rgba(185, 185, 185, 0.7)');

		let traitList = $('<ul/>', {
			id: 'items-list-traits',
			css: {display: 'none', paddingLeft: '20px'}
		});

		let traitShowButton = $('<div/>', {
			id: 'toggle-leaderTrait' + name,
			text: i18n('$village.trait.filter.all'),
			css: {
				cursor:'pointer',
				display:'inline-block',
				float:'right',
				paddingRight:'5px',
				textShadow:'3px 3px 4px gray'}
		});

		for (i in window["com"]["nuclearunicorn"].game.village.Kitten().traits){
			traitList.append(getLeaderTrait(i, option));
		}

		traitShowButton.on('click', function () {
			jobList.toggle(false);
			traitList.toggle();
		});

		let jobList = $('<ul/>', {
			id: 'items-list-jobs',
			css: {display: 'none', paddingLeft: '20px'}
		});

		let jobShowButton = $('<div/>', {
			id: 'toggle-leaderJob' + name,
			text: i18n('$village.panel.job'),
			css: {
				cursor:'pointer',
				display:'inline-block',
				float:'right',
				paddingRight:'5px',
				textShadow:'3px 3px 4px gray'}
		});

		for (i in game.village.jobs){
			jobList.append(getLeaderJob(i, option));
		}

		jobShowButton.on('click', function () {
			traitList.toggle(false);
			jobList.toggle();
		});

		element.append(traitShowButton, jobShowButton, traitList, jobList);

		return element;
	};

	let getLeaderJob = function (index, option) {
		let job = game.village.jobs[index];

		let element = $('<li/>');

		let label = ($('<label/>', {
			'for': 'toggle-leaderJob-' + job.name,
			text: job.title,
			css: {cursor: 'pointer',
				textShadow: '3px 3px 4px gray'}
		}));

		let input = $('<input/>', {
			id: 'toggle-leaderJob-' + job.name,
			name: 'leaderJob',
			value: job.name,
			type: 'radio'
		}).data('option', option);

		if (input.prop("value") === option.leaderJob) {
			input.prop("checked", true);
		}

		element.on('mouseup', function () {
			let lastJobName = $("input[name='leaderJob']:checked").val();
			delete kittenStorage.items['toggle-leaderJob-' + lastJobName];
		});

		input.on('change', function () {
			imessage('distribute.leaderJob', [job.title]);
			option.leaderJob = $("input[name='leaderJob']:checked").val();
			kittenStorage.items['toggle-leaderJob-' + option.leaderJob] = true;
			saveToKittenStorage();
		});
		element.append(input, label);

		return element;
	};

	let getLeaderTrait = function (index, option) {
		const trait = window["com"]["nuclearunicorn"].game.village.Kitten().traits[index];

		const element = $('<li/>');

		const label = ($('<label/>', {
			'for': 'toggle-leaderTrait-' + trait.name,
			text: trait.title,
			css: {
				cursor: 'pointer',
				textShadow: '3px 3px 4px gray'
			}
		}));

		const input = $('<input/>', {
			id: 'toggle-leaderTrait-' + trait.name,
			name: 'leaderTrait',
			value: trait.name,
			type: 'radio'
		}).data('option', option);

		if (input.prop("value") === option.leaderTrait) {
			input.prop("checked", true);
		}

		element.on('mouseup', function () {
			let lastTraitName = $("input[name='leaderTrait']:checked").val();
			delete kittenStorage.items['toggle-leaderTrait-' + lastTraitName];
		});

		input.on('change', function () {
			imessage('distribute.leaderTrait', [trait.title]);
			option.leaderTrait = $(this).val();
			kittenStorage.items['toggle-leaderTrait-' + option.leaderTrait] = true;
			saveToKittenStorage();
		});
		element.append(input, label);

		return element;
	};

	let buildOption, spaceOption, build, buildItem;
	// Grab button labels for religion options
	let religionManager = new ReligionManager();
	for (buildOption in options.auto.faith.items) {
		buildItem = options.auto.faith.items[buildOption];
		build = religionManager.getBuild(buildItem.name || buildOption, buildItem.variant);
		if (build) {
			options.auto.faith.items[buildOption].label = build.label;
		}
	}

	// Grab button labels for time options
	let timeManager = new TimeManager();
	for (buildOption in options.auto.time.items) {
		buildItem = options.auto.time.items[buildOption];
		build = timeManager.getBuild(buildItem.name || buildOption, buildItem.variant);
		if (build) {
			options.auto.time.items[buildOption].label = build.label;
		}
	}

	// Grab button labels for build options
	let buildManager = new BuildManager();
	for (buildOption in options.auto.build.items) {
		buildItem = options.auto.build.items[buildOption];
		build = buildManager.getBuild(buildItem.name || buildOption);
		if (build) {
			if ("stage" in buildItem) {
				options.auto.build.items[buildOption].label = build.meta.stages[buildItem.stage].label;
			} else {
				options.auto.build.items[buildOption].label = build.meta.label;
			}
		}
	}

	// Grab button labels for space options
	let spaceManager = new SpaceManager();
	for (spaceOption in options.auto.space.items) {
		build = spaceManager.getBuild(spaceOption);
		if (build) {
			// It's changed to label in 1.3.0.0
			let title = build.title ? build.title : build.label;
			options.auto.space.items[spaceOption].label = title;
		}
	}

	let optionsElement = $('<div/>', {id: 'ks-options', css: {marginBottom: '10px'}});
	let optionsListElement = $('<ul/>');
	//var optionsTitleElement = $('<div/>', {
	//	css: { bottomBorder: '1px solid gray', marginBottom: '5px' },
	//	text: kg_version
	//});
	//optionsElement.append(optionsTitleElement);

	optionsListElement.append(getToggle('engine'));
	toggles.forEach((name) => {
		optionsListElement.append(getToggle(name));
	});

	// add activity button
	// ===================

	let activitySummary = {
		other: {},
	};

	//建筑日志提示
	let msgSummary = (build, isDelete, filter)=> {
		if (isDelete) {
			activitySummary.other['auto.' + build] = null;
		} else {
			if (!activitySummary.other['auto.' + build]) {
				activity(i18n('summary.auto.' + build), filter);
				storeForSummary('auto.' + build);
			}
		}
	};

	let resetActivitySummary = function () {
		activitySummary = {
			lastyear: game.calendar.year,
			lastday:  game.calendar.day,
			craft:    {},
			trade:    {},
			build:    {},
			other:    {}
		};
	};

	let storeForSummary = function (name, amount, section) {
		if (amount === undefined) {amount = 1;}
		if (section === undefined) {section = 'other';}

		if (activitySummary[section] === undefined) {activitySummary[section] = {};}

		if (activitySummary[section][name] === undefined) {
			activitySummary[section][name] = parseFloat(amount);
		} else {
			activitySummary[section][name] += parseFloat(amount);
		}
	};

	let displayActivitySummary = function () {
		if (game.console.messages.length > 900) {
			game.clearLog();
		}

		for (const i in activitySummary.other) {
			if (activitySummary.other[i]) {isummary('summary.' + i , [game.getDisplayValueExt(activitySummary.other[i])]);}
		}

		// Techs
		let l,name;
		for (name in activitySummary["research"]) {
			l = activitySummary["research"][name];
			l = (l) ? '科学家' : '';
			isummary('summary.tech', [l + '小猫研究了 ' + ucfirst(name)]);
		}

		// Upgrades
		for (name in activitySummary.upgrade) {
			l = activitySummary.upgrade[name];
			l = (l) ? '科学家' : '';
			isummary('summary.upgrade', [l + '小猫发明了 ' + ucfirst(name)]);
		}

		// Buildings
		for (name in activitySummary.build) {
			isummary('summary.building', [game.getDisplayValueExt(activitySummary.build[name]), ucfirst(name)]);
		}

		// Order of the Sun
		for (name in activitySummary.faith) {
			isummary('summary.sun', [game.getDisplayValueExt(activitySummary.faith[name]), ucfirst(name)]);
		}

		// Crafts
		for (name in activitySummary.craft) {
			isummary('summary.craft', [game.getDisplayValueExt(activitySummary.craft[name]), ucfirst(name)]);
		}

		for (name in activitySummary["craftLeader"]) {
			isummary('summary.craftLeader', [game.getDisplayValueExt(activitySummary["craftLeader"][name]), ucfirst(name)]);
		}

		// Trading
		for (name in activitySummary.trade) {
			isummary('summary.trade', [game.getDisplayValueExt(activitySummary.trade[name]), ucfirst(name)]);
		}

		// Show time since last run. Assumes that the day and year are always higher.
		if (activitySummary.lastyear && activitySummary.lastday) {
			let years = game.calendar.year - activitySummary.lastyear;
			let days = game.calendar.day - activitySummary.lastday;

			if (days < 0) {
				years -= 1;
				days += 400;
			}

			let duration = '';
			if (years > 0) {
				duration += years + ' ';
				duration += (years === 1) ? i18n('summary.year') : i18n('summary.years');
			}

			if (days >= 0) {
				if (years > 0) {duration += i18n('summary.separator');}
				duration += roundToTwo(days) + ' ';
				duration += (days === 1) ? i18n('summary.day') : i18n('summary.days');
			}

			isummary('summary.head', [duration]);
		}

		// Clear out the old activity
		resetActivitySummary();
	};

	resetActivitySummary();

	let activityBox = $('<div/>', {
		id: 'activity-box',
		css: {
			display: 'inline-block',
			verticalAlign: 'top'
		}
	});

	let showActivity = $('<a/>', {
		id: 'showActivityHref',
		text: i18n('summary.show'),
		href: '#',
		css: {
			verticalAlign: 'top'
		}
	});

	showActivity.on('click', displayActivitySummary);

	activityBox.append(showActivity);

	$('#clearLog').append(activityBox);

	const messageBox = $('<div/>', {
		id: 'important-msg-box',
		class: 'dialog help',
		css: {
			display: 'none',
			width: 'auto',
			height: 'auto'
		}
	});
	let mbClose = $('<a/>', {text: i18n('ui.close'), href: '#', css: {position: 'absolute', top: '10px', right: '15px'}});
	mbClose.on('click', function () {messageBox.toggle(); });
	let mbTitle = $('<h1/>', {id: 'mb-title', text: 'test text'});
	let mbContent = $('<h1/>', {id: 'mb-content', text: 'test text'});
	messageBox.append(mbClose, mbTitle, mbContent);
	$('#gamePageContainer').append(messageBox);

	let showMessageBox = (title, content) => {
		mbTitle.html(title);
		mbContent.html(content);
		messageBox.toggle();
	};

	// Donation Button
	// ===============

	let showD = function() {
		let donate = $('<li/>', {id: "ks-donate"}).append($('<a/>', {
			href: 'bitcoin:' + address + '?amount=0.00048&label=Kittens Donation',
			target: '_blank',
			text: address
		})).prepend($('<img alt="bit" src="https://s1.ax1x.com/2022/04/30/OSmUAK.png" height="15px" />', {
			css: {
				height: '15px',
				width: '15px',
				padding: '3px 4px 0 4px',
				verticalAlign: 'bottom'
			},
		}));

		// Add some padding above the donation item
		donate.css('padding', '5px');

		optionsListElement.append(donate);
	};
	showD();
	// add the options above the game log
	right.prepend(optionsElement.append(optionsListElement));

	// Initialize and set toggles for Engine
	// =====================================

	let engine = new Engine();

	let toggleEngine;
	let engineOn = () => {
		toggleEngine = $('#toggle-engine');
		toggleEngine.on('change', function () {
			if (toggleEngine.is(':checked')) {
				options.auto.engine.enabled = true;
				engine.start();
			} else {
				options.auto.engine.enabled = false;
				engine.stop();
			}
		});
	};
	engineOn();

	// 记录初始数据
	let _timer = options.auto.cache.dataTimer;
	_timer['trueYear'] = game.calendar.trueYear();
	_timer['ticksTotal'] = game.timer.ticksTotal;
	_timer['saveId'] = game.telemetry.guid;
	_timer = null;

	sessionStorage.setItem('options',JSON.stringify(options));
	loadFromKittenStorage();

	// hack for style.
	// If there are more UI options, split it to "updateUI"
	$('#toggle-style').trigger('change');
	$('#toggle-donate').trigger('change');

	if (console && console.log) {console.log(kg_version + " loaded");}
	game._publish("kitten_scientists/ready", kg_version);

	if (kittenStorage.reset && kittenStorage.reset.reset) {
		// calc paragon and karma
		kittenStorage.reset.karmaTotal += game.resPool.get('karma').value - Number(kittenStorage.reset.karmaLastTime);
		kittenStorage.reset.paraonTotal += game.resPool.get('paragon').value - Number(kittenStorage.reset.paragonLastTime);
		kittenStorage.reset.reset = false;

		// show messagebox
		showMessageBox(
			i18n('summary.time.reset.title', [kittenStorage.reset.times]),
			i18n('summary.time.reset.content', [kittenStorage.reset.karmaTotal, kittenStorage.reset.paragonTotal])
		);
		// auto start
		toggleEngine.prop('checked', true);
		toggleEngine.trigger('change');
		imessage('reset.after');
	} else {
		kittenStorage.reset = {
			reset: false,
			times: 0,
			paragonLastTime: 0,
			paragonTotal: 0,
			karmaLastTime: 0,
			karmaTotal: 0
		};
	}
	saveToKittenStorage();

	const autoOpen = function () {
		if (!options.auto.engine.enabled && options.auto.options.items.autoScientists.enabled) {
			let countdown = (options.countdown);
			if (countdown === 0) {
				toggleEngine.click();
				clearInterval(autoOpenTime);
				imessage('reset.after');
			} else if (countdown > 10) {
				if (countdown % 60 === 0) {
					imessage('auto.tip');
				}
				if (countdown % 10 === 0) {
					iactivity('auto.countdown', [countdown]);
				}
				options.countdown -= 1;
			} else if (countdown <= 10) {
				imessage('reset.countdown.' + countdown);
				options.countdown -= 1;
			}
		} else {
			clearInterval(autoOpenTime);
		}
	};
	let autoOpenTime = setInterval(autoOpen, 1000);

};

let loadTest = function () {
	if (typeof gamePage === 'undefined' || typeof i18nLang === 'undefined') {
		// Test if kittens game is already loaded or wait 2s and try again
		setTimeout(function () {
			loadTest();
		}, 2000);
	} else {
		let upgrades = game.workshop.upgrades;
		for (let i in game.workshop.upgrades) {
			game.workshop.metaCache[upgrades[i].name] = upgrades[i];
		}
		game.workshop.metaCache['undefined'] = null;
		delete game.workshop.metaCache['undefined'];
		// Kittens loaded, run Kitten Scientist's Automation Engine
		run();
		loadTest = run = null;
	}
};

loadTest();