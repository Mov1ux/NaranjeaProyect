import React from "react";
import Logo from "/workspaces/NaranjeaProyect/src/front/img/logo.webp";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light custom-navbar">
			<div className="container">
				<Link to="/" className="navbar-brand custom-navbar-brand">
					<img src={Logo} alt="Naranjea Logo" className="navbar-logo" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link to="/" className="nav-link custom-nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about" className="nav-link custom-nav-link">
								About Us
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact" className="nav-link custom-nav-link">
								Contact Us
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle custom-nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Store
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link to="/products/oranges" className="dropdown-item">Oranges</Link></li>
								<li><Link to="/products/mandarins" className="dropdown-item">Mandarins</Link></li>
								<li><Link to="/products/avocados" className="dropdown-item">Avocados</Link></li>
								<li><Link to="/products/pomegranates" className="dropdown-item">Pomegranates</Link></li>
								<li><Link to="/products/mixed-fruits" className="dropdown-item">Mixed Fruits</Link></li>
								<li><Link to="/products/blood-oranges" className="dropdown-item">Blood Oranges</Link></li>
								<li><Link to="/products/vegetable-box" className="dropdown-item">Vegetable Box</Link></li>
								<li><Link to="/products/lemons" className="dropdown-item">Lemons</Link></li>
								<li><Link to="/products/persimmons" className="dropdown-item">Persimmons</Link></li>
								<li><Link to="/products/all" className="dropdown-item">All Products</Link></li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle custom-nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Adopt a Tree
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><Link to="/adopt" className="dropdown-item">Adopt a Tree</Link></li>
								<li><Link to="/gift" className="dropdown-item">Gift a Tree</Link></li>
							</ul>
						</li>
						<li className="nav-item">
							<Link to="/services" className="nav-link custom-nav-link">
								Agricultural Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog" className="nav-link custom-nav-link">
								Blog
							</Link>
						</li>
					</ul>
					<form className="d-flex ms-3">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-light" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	);
};