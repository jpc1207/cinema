<View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: "image"}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>Nom prenom</Text>
            <Text style={styles.vote_text}>Note</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>Description</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne*/}
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le 00/00/0000</Text>
          </View>
        </View>
      </View>