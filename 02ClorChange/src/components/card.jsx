import React from 'react'

const card = ({username="JB", post="Not Assigned"}) => {
  return (
    <div>
       <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/18013815/pexels-photo-18013815/free-photo-of-little-cat-by-tracks.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" width="384" height="512"/>
        <div className="pt-6 md:p-8 text-center space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni aliquid id, est nisi temporibus dolor dicta sapiente fugit facilis quae, nemo consequuntur sit. Voluptatem in beatae nostrum placeat nihil tempora.
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default card
