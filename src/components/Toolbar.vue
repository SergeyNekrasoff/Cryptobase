<template>
	<header class="header">
		<sui-grid verticalAlign="bottom">
			<sui-grid-row :columns="2" relaxed="very">
				<sui-grid-column>
					<router-link to="/">
						<div class="header__logo"></div>
					</router-link>
				</sui-grid-column>
				<sui-grid-column class="header__list">
					<sui-list horizontal>
				    <sui-list-item>
							<sui-list-content>
								<sui-button @click.native="toggle" className="btn-ui" name="signin">Войти</sui-button>
							</sui-list-content>
				    </sui-list-item>
				    <sui-list-item>
							<sui-list-content>
								<sui-button className="btn-ui" name="signup">Регистрация</sui-button>
							</sui-list-content>
				    </sui-list-item>
				  </sui-list>
				</sui-grid-column>
			</sui-grid-row>
			<sui-grid-row>
				<sui-grid-column :columns="1">
					<sui-menu class="header__menu" :widths="4">
						<sui-menu-item>
							<router-link to="/">Главная</router-link>
						</sui-menu-item>
						<sui-menu-item>
							<router-link to="/analytic">Аналитика</router-link>
						</sui-menu-item>
						<sui-menu-item >
							<router-link to="/news">Новости</router-link>
						</sui-menu-item>
						<sui-menu-item >
							<router-link to="/market">Рынок</router-link>
						</sui-menu-item>
					</sui-menu>
				</sui-grid-column>
			</sui-grid-row>
		</sui-grid>

		<sui-modal v-model="open">
			<sui-form v-on:submit.prevent>
		    <sui-form-field>
		      <label>E-mail</label>
		      <input placeholder="E-mail" v-model="email" type="text">
		    </sui-form-field>
		    <sui-form-field>
		      <label>Password</label>
		      <input placeholder="Password" v-model="password" type="password">
		    </sui-form-field>
		    <sui-button role="submit" type="submit" v-on:click="signIn">Войти</sui-button>
		    <!-- <sui-button type="submit" v-on:click="signUp">Регистрация</sui-button> -->
		  </sui-form>
      <sui-modal-actions>
        <sui-button floated="right" positive @click.native="toggle">
          Close
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
	</header>
</template>

<script>
import Firebase from 'firebase';

export default {
	name: 'header',
	data () {
		return {
			open: false,
			email: '',
			password: ''
		}
	},
	methods: {
		toggle () {
			this.open = !this.open;
		},
		signIn: function () {
			Firebase.auth()
				.signInWithEmailAndPassword(this.email, this.password)
				.then(
					user => {
						// this.$router.replace('analytic')
						console.log(`user is logined`)
					},
					error => {
						alert(error.message)
					}
				)
		},
		signUp: function () {
			Firebase.auth()
				.createUserWithEmailAndPassword(this.email, this.password)
				.then(
					user => {
						this.$router.replace('analytic')
					},
					error => {
						alert(error.message)
					}
				)
		}
	}
}

</script>

<style lang="scss">
@import '../styles/theme';

.header {
  padding: 16px;

  &__logo {
    background: url('../assets/logo.png') no-repeat;
		background-position: -40px 6px;
		width: 300px;
		height: 36px;
  }

	&__list {
		text-align: right;
	}

	.menu {
		border-radius: 0;
		background: transparent;

		.item {
    	border-radius: 0;

			.router-link-exact-active {
				border-bottom: 1px solid $theme-secondary;
			}
		}
	}
}
</style>
