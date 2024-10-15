import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontSize: 12,
        color: '#333',
    },
    header: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    contact: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
    },
    section: {
        marginBottom: 20,
    },
    title: {
        fontSize: 14,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#333',
    },
    text: {
        marginBottom: 5,
    },
    divider: {
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
    },
});

// Create Document Component
export const CV = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.section}>
                <Text style={styles.header}>Mohamed Mohamed</Text>
                <Text style={styles.text}>Cross-Platform Software Developer</Text>
                <View style={styles.contact}>
                    <Text>Email: mohamed.m.abdalfattah@gmail.com</Text>
                    <Text>LinkedIn: linkedin.com/in/mohamed</Text>
                    <Text>GitHub: github.com/3mohamed-abdelfattah</Text>
                    <Text>Phone: +201101201745</Text>
                </View>
            </View>

            <View style={styles.divider} />

            {/* Profile */}
            <View style={styles.section}>
                <Text style={styles.title}>Profile</Text>
                <Text style={styles.text}>
                    Specializing in cross-platform software development, skilled in leveraging technology to create
                    innovative solutions and unique user interfaces. Experienced in developing projects across multiple
                    platforms and proficient in the latest software tools. Committed to continuous growth and eager to
                    contribute to groundbreaking technological achievements.
                </Text>
            </View>

            {/* Education */}
            <View style={styles.section}>
                <Text style={styles.title}>Education</Text>
                <Text style={styles.text}>Bachelor of Science, Beni-Suef University (2021 - 2024)</Text>
                <Text style={styles.text}>Major: Computer Science, Minor: Mathematics</Text>
                <Text style={styles.text}>Relevant Coursework: Software Development, Software Engineering, Operating Systems, Algorithms</Text>
            </View>

            <View style={styles.divider} />

            {/* Experience */}
            <View style={styles.section}>
                <Text style={styles.title}>Experience</Text>
                <Text style={styles.text}>
                    Summer Intern – Web Designer at National Telecommunication Institute: Created visually appealing
                    and user-friendly websites with a focus on responsive design.
                </Text>
                <Text style={styles.text}>
                    Summer Intern – React Developer at ITI: Developed dynamic applications using React, focusing on reusable components.
                </Text>
                <Text style={styles.text}>
                    Summer Intern - MERN Stack at ITI: Worked on multiple projects using MongoDB, Express.js, React, and Node.js.
                </Text>
            </View>

            <View style={styles.divider} />

            {/* Skills */}
            <View style={styles.section}>
                <Text style={styles.title}>Technical Skills</Text>
                <Text style={styles.text}>JavaScript, Kotlin, React.js, Android Kotlin Development, Tailwind CSS, OOP, SQLite</Text>
            </View>

            {/* Languages */}
            <View style={styles.section}>
                <Text style={styles.title}>Languages</Text>
                <Text style={styles.text}>Arabic (Native), English (Intermediate), German (Elementary)</Text>
            </View>
        </Page>
    </Document>
);