import Image from "../models/Image.js";


export const getImages = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
		const filter = (!req.query.filter || req.query.filter === 'all') ? '' : req.query.filter;

    const limit = 10;
		const startIndex = (page - 1) * limit;
		const endIndex = page * limit;

    const info = {
      currentPage: page,
      hasNextPage: page >= 3 ? false : true,
			images: await Image.find().limit(limit).skip(startIndex)
    };
		
		info.images = info.images.filter(image => {
			return image.category.includes(filter)
		})


    res.status(200).json(info);

  } catch (err) {
    console.log(err);

		res.status(500).json({
			errorStatus: 500,
			message: "Internal Server Error"
		})
  }
}

export const searchImages = async (req, res) => {
  try {
    const key = req.query.q;

		if(!key) return res.status(400).json({
			errorStatus: 400,
			message: 'search key or term required'
		})

		res.status(200).json({
			searchTerm: key,
			results: await Image.find({ $text: { $search: key } })
		})

  } catch (err) {
    console.log(err);

		res.status(500).json({
			errorStatus: 500,
			message: "Internal Server Error"
		})
  }
}

