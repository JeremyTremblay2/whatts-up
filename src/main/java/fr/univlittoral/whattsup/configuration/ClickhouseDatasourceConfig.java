package fr.univlittoral.whattsup.configuration;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import javax.sql.DataSource;
import java.util.Objects;

@Configuration
public class ClickhouseDatasourceConfig {
    @Bean
    @ConfigurationProperties("spring.datasource.clickhouse")
    public DataSourceProperties clickhouseDataSourceProperties() {
        return new DataSourceProperties();
    }

    @Bean
    public DataSource clickhouseDataSource() {
        return clickhouseDataSourceProperties().initializeDataSourceBuilder().build();
    }

    @Bean
    public JdbcTemplate clickhouseJdbcTemplate(@Qualifier("clickhouseDataSource") DataSource dataSource) {
        return new JdbcTemplate(dataSource);
    }
}