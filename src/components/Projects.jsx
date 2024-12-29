import React from 'react'
import angel from "../assets/images/angel04.png";
import one from "../assets/images/1proj.png"

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
]

const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
 
]

const Projects = () => {
  return (
    <div id="projects" className="bg-slate-900">
      <div className="container mx-auto max-w-screen-lg min-h-full pt-28">

        <div className="section-header">
          <span className="section-title">/ projects</span>
        </div>

        <div className="bg-slate-800 rounded-3xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-pink-300 tracking-widest">LATEST PROJECT</p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Technical Specifications</h2>
              <p className="mt-4 text-slate-500">
                The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
                steel divider separates active cards from new ones, or can be used to archive important task lists.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-slate-300">{feature.name}</dt>
                    <dd className="mt-2 text-sm text-slate-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              <img
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-01.jpg"
                className="rounded-lg bg-gray-100"
              />
              <img
                alt="Top down view of walnut card tray with embedded magnets and card groove."
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-02.jpg"
                className="rounded-lg bg-gray-100"
              />
              <img
                alt="Side of walnut card tray with card groove and recessed card area."
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-03.jpg"
                className="rounded-lg bg-gray-100"
              />
              <img
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
                src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg"
                className="rounded-lg bg-gray-100"
              />
            </div>
          </div>
        </div>

        {/* cards */}
        <div className="">
          <div className="mx-auto max-w-2xl px-0 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-0">

            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                  
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects