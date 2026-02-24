import { Link } from 'react-router-dom'

const BreadCrumbs = ({ routes }) => {

    return (
        <div className='inline-flex items-center gap-2 text-sm'>
            {Array.isArray(routes) &&
                routes.map((route, index) => {
                    const isLast = index === routes.length - 1;

                    return (
                        <div key={index} className="flex items-center gap-2">
                            {isLast ? (
                                <span className=" font-semibold cursor-default pointer-events-none">
                                    {route.name}
                                </span>
                            ) : (
                                <Link
                                    to={route.path}
                                    className="hover:text-[var(--neon)] hover:underline"
                                >
                                    {route.name}
                                </Link>
                            )}

                            {!isLast && <span>/</span>}
                        </div>
                    );
                })}

        </div>
    )
}

export default BreadCrumbs
