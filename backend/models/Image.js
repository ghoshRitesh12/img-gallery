import mongoose from "mongoose";

const collectionName = 'Images';

const imagesSchema = new mongoose.Schema({
		author: {
			type: String,
			required: true,
		},
		authorPfp: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
			match: [/^[a-zA-Z0-9\s\.\,\-/\(\)\'\|\!\_\:\+@%]+$/, "invalid"],
			index: { type: "text" },
		},
		category: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true,
		},
		views: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
		collection: collectionName
	}
)

const b = [
	{
		"author": "Maxim Tolchinskiy",
		"authorPfp": "https://images.unsplash.com/profile-fb-1577024478-ae23d4066737.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A building with a clock on the front of it",
		"views": 229636,
		"url": "https://images.unsplash.com/photo-1681930445913-b163cdf75679?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Samantha Fortney",
		"authorPfp": "https://images.unsplash.com/profile-1615741189059-44da1fc8cdeaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Spring Strawberry Harvest",
		"views": 261981,
		"url": "https://images.unsplash.com/photo-1682207151041-3b5dca526dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Holly Landkammer",
		"authorPfp": "https://images.unsplash.com/profile-1681263630748-c6d987f3da52?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A young boy playing with a toy truck in a living room",
		"views": 443759,
		"url": "https://images.unsplash.com/photo-1682363476409-9375ff4ce017?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Andrea De Santis",
		"authorPfp": "https://images.unsplash.com/profile-1650823265094-d12ce7a91369image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "YouTube.com/@DreySantesson -- Dongdaemun Design Plaza",
		"views": 434029,
		"url": "https://images.unsplash.com/photo-1682368105880-d7593d889ef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Gabriel Ramos",
		"authorPfp": "https://images.unsplash.com/profile-1677361000289-4afd972f1b27?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A chandelier hanging from the ceiling of a building",
		"views": 820236,
		"url": "https://images.unsplash.com/photo-1682448224898-ec87d2fb07ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Alex Quezada",
		"authorPfp": "https://images.unsplash.com/profile-1653662674703-738130ae5b6aimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A living room filled with furniture and a large window",
		"views": 458329,
		"url": "https://images.unsplash.com/photo-1682464311010-dc8fce2f2689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Levi Arnold",
		"authorPfp": "https://images.unsplash.com/profile-1682288783172-237700af9fa4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A man standing in the middle of a road holding a hat",
		"views": 356687,
		"url": "https://images.unsplash.com/photo-1682616323080-b98015597e1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Shubham Dhage",
		"authorPfp": "https://images.unsplash.com/profile-1665554136768-6615667f6670image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A green abstract background with wavy lines",
		"views": 367763,
		"url": "https://images.unsplash.com/photo-1682680294067-e7df53c8ed6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "NEOM",
		"authorPfp": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Islands of NEOM - NEOM, Saudi Arabia | Home to kaleidoscopic- colored coral reefs and an abundance of diverse -marine life.",
		"views": 988060,
		"url": "https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Barbara Zandoval",
		"authorPfp": "https://images.unsplash.com/profile-fb-1560352576-919068549dfc.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Easter",
		"views": 179798,
		"url": "https://images.unsplash.com/photo-1682955279025-a97fb1cc23fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Levi Arnold",
		"authorPfp": "https://images.unsplash.com/profile-1682288783172-237700af9fa4image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A pan filled with food next to a bowl of crackers",
		"views": 319961,
		"url": "https://images.unsplash.com/photo-1682965636891-fd7d4e097f09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "José Alejandro Cuffia",
		"authorPfp": "https://images.unsplash.com/profile-1539701465756-26b323a67a38?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A cat sitting on a table in a room",
		"views": 314434,
		"url": "https://images.unsplash.com/photo-1683000789824-b7529dcb26a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Nati Melnychuk",
		"authorPfp": "https://images.unsplash.com/profile-1594918935171-007d2093336dimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A table topped with plates of food and a vase of flowers",
		"views": 230634,
		"url": "https://images.unsplash.com/photo-1683048792702-ba62fd30686d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Mitchell Luo",
		"authorPfp": "https://images.unsplash.com/profil e-1567756814188-074b1763652fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "The sun is setting over a sand dune",
		"views": 302124,
		"url": "https://images.unsplash.com/photo-1683123851333-69ad192688fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Josh Hild",
		"authorPfp": "https://images.unsplash.com/profile-1652754804106-1b1e8b7c0528image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A man standing on a rock in front of a lake",
		"views": 478600,
		"url": "https://images.unsplash.com/photo-1683130461542-53fcbd04056f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Eberhard Grossgasteiger",
		"authorPfp": "https://images.unsplash.com/profile-1593541755358-41ff2a4e41efimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A plane flying through a cloudy blue sky",
		"views": 286378,
		"url": "https://images.unsplash.com/photo-1683187573212-d65b31aea32f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Matt Wang",
		"authorPfp": "https://images.unsplash.com/profile-1610648484302-fc1a766eb73cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "quite the interior isn't it",
		"views": 489945,
		"url": "https://images.unsplash.com/photo-1683237340069-7b8b21c87fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Hossein Nasr",
		"authorPfp": "https://images.unsplash.com/profile-1679834077450-a14d262d4deaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Cam : 2000d canon Lens : 18_135 stm",
		"views": 484432,
		"url": "https://images.unsplash.com/photo-1683319521824-dce955eefcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Grace Hilty",
		"authorPfp": "https://images.unsplash.com/profile-1675714284246-28933ad032d8image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A woman in a white dress standing in front of purple flowers",
		"views": 343001,
		"url": "https://images.unsplash.com/photo-1683430674994-e31665b84304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Andre Benz",
		"authorPfp": "https://images.unsplash.com/profile-1513183198594-66e21a4cfe3d?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Man in Japanese taxi waiting in the middle of busy traffic",
		"views": 215985,
		"url": "https://images.unsplash.com/photo-1683450453846-f92e078e79d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Tansu Topuzoğlu",
		"authorPfp": "https://images.unsplash.com/profile-1681200598454-c16fa28f1b08image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A man with a backpack and hat looking at hot air balloons",
		"views": 542900,
		"url": "https://images.unsplash.com/photo-1683475962496-220b83c850a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Sasha Matic",
		"authorPfp": "https://images.unsplash.com/profile-1683660525086-134632069aeeimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "An aerial view of a large body of water",
		"views": 573588,
		"url": "https://images.unsplash.com/photo-1683660583640-135f5717a048?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Fiona Murray",
		"authorPfp": "https://images.unsplash.com/profile-1608153134052-2d9063c1efeaimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Flatlay on white background with laptop, pen, glasses and calendar.",
		"views": 270534,
		"url": "https://images.unsplash.com/photo-1683921055230-c3ba01e70131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Richard Stachmann",
		"authorPfp": "https://images.unsplash.com/profile-fb-1661599666-081b04e75823.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "An old building with a green door and windows",
		"views": 179702,
		"url": "https://images.unsplash.com/photo-1684050678694-e3898f83361f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Natalie Kinnear",
		"authorPfp": "https://images.unsplash.com/profile-1674495181975-9c46019fa43cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Marguerite daisies against a pale sky",
		"views": 255528,
		"url": "https://images.unsplash.com/photo-1684397981661-645aae9552e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Louis Paulin",
		"authorPfp": "https://images.unsplash.com/profile-1633846573323-46556af7284eimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Sunrise on top of the Piton des Neiges",
		"views": 413872,
		"url": "https://images.unsplash.com/photo-1684403527658-e435d1934fe0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Kateryna Hliznitsova",
		"authorPfp": "https://images.unsplash.com/profile-1636120734399-b8d2e59725ff?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A little girl in a white dress holding a piece of food",
		"views": 364953,
		"url": "https://images.unsplash.com/photo-1684444160725-e6ba055df296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "vale",
		"authorPfp": "https://images.unsplash.com/profile-1684553537355-8e76c1206ad1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "ueahdlkahk",
		"views": 305316,
		"url": "https://images.unsplash.com/photo-1684553300741-cd864dbaeba2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "George Dagerotip",
		"authorPfp": "https://images.unsplash.com/profile-1662488208162-5cc3bc7882ebimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "Experimenting with film simulation on FujifilmX-T20 (Ttartisan 28mm) + VSCO.",
		"views": 233412,
		"url": "https://images.unsplash.com/photo-1684570174141-440c0892987f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	},
	{
		"author": "Toa Heftiba",
		"authorPfp": "https://images.unsplash.com/profile-1605780274397-200ea3604d6fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
		"title": "A woman sitting on top of a pile of newspapers",
		"views": 1351182,
		"url": "https://images.unsplash.com/photo-1684769684160-5912ad3f9b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTM1ODJ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODUxMjgwMTd8&ixlib=rb-4.0.3&q=80&w=1080"
	}
]


export default mongoose.model(collectionName, imagesSchema);
