import React from 'react';
import {NavLink} from "react-router-dom";

import './HomePage.scss'

const HomePage = ({isAuth}) => {
    return (
        <div className="home">
            <div className="home__title">
                <h2 className="home__welcome">Welcome to</h2>
                <h1 className="home__corp-name">Planktonics</h1>
                <p className="home__info">social network for employees</p>
            </div>
            {!isAuth && <NavLink className="home__login-link" to='/login'>Login</NavLink>}
            <div className="home__about">
                <h3 className="home__about-title">Info: </h3>
                <p className="home__about-info">
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet, architecto asperiores, aspernatur commodi cumque dicta ea earum ipsum, iste modi nisi omnis quae quibusdam quos repellat saepe sapiente tempore!</span><span>Accusamus, adipisci consequatur, cumque dolorem dolores doloribus dolorum eaque earum eum eveniet fuga illum iste itaque maiores non placeat possimus praesentium quae qui suscipit tempore velit vero voluptates voluptatibus voluptatum.</span><span>A aliquid, blanditiis debitis, delectus distinctio et expedita facere ipsum libero minima nemo perspiciatis quae quam quisquam quo quod rem repellendus sed tempora vero! Aliquam aperiam id magnam totam veritatis.</span><span>Architecto aspernatur assumenda aut cumque distinctio dolores doloribus earum est excepturi in ipsa maiores maxime minima molestiae nobis non quaerat quia quis quo, ratione recusandae repellat sapiente vel velit vero.</span><span>Animi consequuntur delectus enim et eum inventore, laudantium libero nemo quae quibusdam repellat rerum tempora, ullam. Ab, assumenda, eum ex, fuga in iste iure nihil nulla quod suscipit temporibus vero.</span><span>A, accusamus accusantium doloribus, eaque eius fugit ipsum itaque iure nesciunt nobis numquam optio repellat reprehenderit vitae voluptate? Deserunt impedit laboriosam possimus quia quo, repudiandae! Culpa distinctio nam officia quod?</span><span>Aspernatur, quia, similique. Accusantium aliquam aliquid cum dolore error esse est fugiat illum itaque iure non perferendis possimus, quam quas vel veniam veritatis! Assumenda dolorem ducimus ipsam nemo possimus quam?</span><span>Ab atque consequatur culpa dicta magnam optio quo voluptatem! Dolore fugiat mollitia non suscipit. Aliquam, at corporis deserunt, et, hic provident quam quasi repellat sapiente similique sit temporibus totam voluptatem.</span><span>A adipisci corporis dicta dolore dolores fugiat, harum ipsa laborum magnam nisi odit officia porro quaerat quisquam, repudiandae sit veniam voluptas? Dolorem expedita ipsa mollitia pariatur possimus quam veniam voluptate.</span><span>A ab aperiam at corporis cum cupiditate deleniti deserunt distinctio dolor dolore doloremque dolores eum facere fugit hic illum incidunt nam, necessitatibus nesciunt, nihil omnis pariatur quae ratione saepe sunt!</span>
                </p>
            </div>
        </div>
    );
};

export default HomePage;
