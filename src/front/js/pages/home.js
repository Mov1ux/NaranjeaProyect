import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import naranjeaImageUrl from "/workspaces/NaranjeaProyect/src/front/img/logo.webp";
import "../../styles/home.css";

export const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section">
                <img src="https://www.eluniverso.com/resizer/0EQqti_WOEXjQbi-bUqniSrX-BM=/1072x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/COAATDZBOREGXDG6WITTRXVASQ.jpg" alt="Naranjea Home" className="hero-image" />
                <div className="hero-text">
                    <h1>Pasión, Tradición y Sentimiento</h1>
                    <Link to="/store" className="btn btn-primary">Descubrir</Link>
                </div>
            </div>
            <div className="products-section">
                <h2>Tienda Online Naranjas</h2>
                <div className="product-categories">
                    <Link to="/products/oranges" className="product-link">Comprar Naranjas</Link>
                    <Link to="/products/mixed-fruits" className="product-link">Mix de Frutas</Link>
                    <Link to="/products/mandarins" className="product-link">Mandarinas</Link>
                </div>
            </div>
            <div className="reviews-section">
                <h2>Valoraciones</h2>
                <div className="review">
                    <p>"Gran idea y mejores naranjas! Repetiremos!" - Xavi Castell (BARCELONA)</p>
                </div>
                <div className="review">
                    <p>"Esperando la nueva campaña de naranjas. Lo recomiendo." - Iñaki Pérez (Bilbao)</p>
                </div>
                <div className="review">
                    <p>"Naranjas auténticas valencianas! Zumo de gran sabor." - Teresa Carbonell (Madrid)</p>
                </div>
            </div>
            <div className="collaborations-section">
                <h2>Colaboraciones</h2>
                <p>Nuestras frutas y verduras llegarán a todo el mundo que más lo necesita, gracias a la colaboración con Banco de alimentos, fundación que ayuda a quienes más lo necesitan.</p>
            </div>
        </div>
    );
};
