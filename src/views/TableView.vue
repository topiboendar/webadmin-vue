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
				<div class="content-wrapper">
					<div class="header-db">
						<h1>Page Name</h1>
						<nav class="breadcumb">
							<ol>
								<li><a href="#/">Home</a><span class="mdi mdi-slash-forward"></span></li>
								<li><a href="#/">Previous</a><span class="mdi mdi-slash-forward"></span></li>
								<li>Now</li>
							</ol>
						</nav>
					</div>
					<div class="table-wrapper">
						<div class="header-table">
							<a href="#"> Tambah baru</a>
						</div>
						<div class="body-table">
							<table>
								<thead>
									<tr>
										<th style="text-transform: uppercase;">id</th>
										<th>name</th>
										<th>photo</th>
										<th>price</th>
										<th>date</th>
										<th>status</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr id="dataTB">
										<td>12345678901</td>
										<td>name product</td>
										<td><img src="@/assets/img/user_kr.jpg"></td>
										<td>320000</td>
										<td>23/09/23</td>
										<td><span>sold out</span></td>
										<td>
											<span id="action-tbl" class="mdi mdi-dots-vertical"></span>
											<div class="action-group-tbl">
												<a href="#/"><span class="mdi mdi-square-edit-outline"></span>Edit</a>
												<a href="#/"><span class="mdi mdi-delete-outline"></span>Delete</a>
											</div>
										</td>
									</tr>
									<tr id="dataTB">
										<td>12345678901</td>
										<td>name product</td>
										<td><img src="@/assets/img/photo-1-15892781976121808730915.webp"></td>
										<td>320000</td>
										<td>23/09/23</td>
										<td><span>sold out</span></td>
										<td>
											<span id="action-tbl" class="mdi mdi-dots-vertical"></span>
											<div class="action-group-tbl">
												<a href="#/"><span class="mdi mdi-square-edit-outline"></span>Edit</a>
												<a href="#/"><span class="mdi mdi-delete-outline"></span>Delete</a>
											</div>
										</td>
									</tr>
									<tr id="dataTB">
										<td>12345678901</td>
										<td>name product</td>
										<td><img src="@/assets/img/g_big0014.jpg"></td>
										<td>320000</td>
										<td>23/09/23</td>
										<td><span>sold out</span></td>
										<td>
											<span id="action-tbl" class="mdi mdi-dots-vertical"></span>
											<div class="action-group-tbl">
												<a href="#/"><span class="mdi mdi-square-edit-outline"></span>Edit</a>
												<a href="#/"><span class="mdi mdi-delete-outline"></span>Delete</a>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</main>
		<Footer />
</template>
