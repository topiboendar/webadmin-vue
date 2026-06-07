<script setup>
import TopNavbar from './components/TopNavbar.vue'
import Sidebar from './components/Sidebar.vue'
import Footer from './components/Footer.vue';
</script>

<template>
	<TopNavbar />
	<main>
		<Sidebar />
		<section class="main-content">
			<section class="dashboard-content">
				<div class="header-db">
					<h1>Dashboard</h1>
					<nav class="breadcumb">
						<ol>
							<li><a href="#/">Home</a><span class="mdi mdi-slash-forward"></span></li>
							<li><a href="#/">Previous</a><span class="mdi mdi-slash-forward"></span></li>
							<li>Now</li>
						</ol>
					</nav>
				</div>
				<div class="container">
					<div class="card-wrapper">
						<div class="card">
							<div class="header-card">
								<span class="mdi mdi-cash-register"></span>
								<div class="wrapper">
									<h1>3.500.000</h1>
									<p>Summary Overview</p>
								</div>
							</div>
							<div class="footer-card">
								<a href="#/">View content</a>
								<span class="mdi mdi-chevron-right"></span>
							</div>
						</div>
					</div>
					<div class="card-wrapper">
						<div class="card">
							<div class="header-card">
								<span class="mdi mdi-package-variant"></span>
								<div class="wrapper">
									<h1>250</h1>
									<p>Current Product</p>
								</div>
							</div>
							<div class="footer-card">
								<a href="#/">View content</a>
								<span class="mdi mdi-chevron-right"></span>
							</div>
						</div>
					</div>
					<div class="card-wrapper">
						<div class="card">
							<div class="header-card">
								<span class="mdi mdi-truck"></span>
								<div class="wrapper">
									<h1>20</h1>
									<p>Suppliers</p>
								</div>
							</div>
							<div class="footer-card">
								<a href="#/">View content</a>
								<span class="mdi mdi-chevron-right"></span>
							</div>
						</div>
					</div>
					<div class="card-wrapper">
						<div class="card">
							<div class="header-card">
								<span class="mdi mdi-truck"></span>
								<div class="wrapper">
									<h1>20</h1>
									<p>Tewew</p>
								</div>
							</div>
							<div class="footer-card">
								<a href="#/">View content</a>
								<span class="mdi mdi-chevron-right"></span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	</main>
	<Footer />
</template>
