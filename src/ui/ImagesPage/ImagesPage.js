import React from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "./Images.module.css";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {getData} from "../../bll/dataReducer";

const ImagesPage = (props) => {
    const dispatch = useDispatch()
    const page = useSelector(state => state.reducer.page)
    const onNextPageClick = () => {
        dispatch(getData(props.routerProps.match.params.rover, props.routerProps.match.params.camera, 1000, page + 1))
    }
    const onPrevPageClickClick = () => {
        dispatch(getData(props.routerProps.match.params.rover, props.routerProps.match.params.camera, 1000, page - 1))
    }
    const data = useSelector(state => state.reducer.data)
    const dataImages = data.photos.map(el => <div className={s.singleImage}><img className={s.image} src={el.img_src}
                                                                                 alt=""/></div>)
    return (
        <div className={s.imagesPageWrapper}>
            <Button><NavLink to={'/'}>back to menu</NavLink></Button>
            <Button onClick={onPrevPageClickClick}>back to previous photos</Button>
            <Button onClick={onNextPageClick}>show more</Button>
            <div className={s.imageWrapper}>{dataImages}</div>
        </div>
    )
}
export default ImagesPage
